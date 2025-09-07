// Ensure this is a client component
"use client";

import { useState, useEffect } from "react";
import CheckoutPage from "@/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

// Ensure the Stripe public key is defined
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const [cartAmount, setCartAmount] = useState<number>(0); // Amount in dollars
  const [cartAmountCents, setCartAmountCents] = useState<number>(0); // Amount in cents for Stripe
  const [isValidAmount, setIsValidAmount] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod", // Default to cash on delivery
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = () => {
      try {
        const storedCart = localStorage.getItem("cart");
        if (!storedCart) {
          console.warn("Cart is empty or not found in localStorage.");
          setIsValidAmount(false);
          return;
        }

        const cart = JSON.parse(storedCart);
        if (!Array.isArray(cart)) {
          console.error("Cart data is not valid:", cart);
          setIsValidAmount(false);
          return;
        }

        // Calculate total amount
        const totalAmount = cart.reduce((total: number, item: any) => {
          const price = parseFloat(item.price || 0);
          const discount = parseFloat(item.discountPercentage || 0) / 100;
          const quantity = parseInt(item.quantity || 1, 10);

          if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 1) {
            console.error("Invalid cart item:", item);
            return total;
          }

          const discountedPrice = discount > 0 ? price * (1 - discount) : price;
          return total + discountedPrice * quantity;
        }, 0);

        if (totalAmount > 0 && !isNaN(totalAmount)) {
          setCartAmount(parseFloat(totalAmount.toFixed(2))); // Save in dollars
          setCartAmountCents(Math.round(totalAmount * 100)); // Convert to cents for Stripe
          setIsValidAmount(true);
        } else {
          console.error("Calculated invalid cart amount:", totalAmount);
          setIsValidAmount(false);
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setIsValidAmount(false);
      }
    };

    fetchCart();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.paymentMethod === "cod") {
      // Handle COD order placement
      console.log("Order details (COD):", formData);
      setIsOrderPlaced(true);
      // Redirect to a confirmation page or reset the form
      setTimeout(() => {
        router.push("/order-confirmation"); // Example redirection
      }, 2000);
    } else {
      // Handle online payment
      console.log("Proceeding to online payment with details:", formData);
    }
  };

  if (!isValidAmount) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">Error: Invalid cart amount.</p>
        <p>Please check your cart and try again.</p>
      </div>
    );
  }

  if (isOrderPlaced) {
    return (
      <div className="text-center mt-10">
        <p className="text-green-500 font-semibold">Order placed successfully!</p>
        <p>Thank you for shopping with us.</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-slate-400 to-zinc-900">
      <h1 className="text-4xl font-extrabold mb-5">Checkout</h1>
      <p className="text-lg mb-5">
        Total Amount: <span className="font-bold">${cartAmount}</span>
      </p>

      <form onSubmit={handleSubmit} className="text-left max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {formData.paymentMethod === "cod" ? "Place Order" : "Proceed to Payment"}
        </button>
      </form>

      {formData.paymentMethod === "online" && (
        <div className="mt-10">
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: cartAmountCents, // Pass amount in cents to Stripe
              currency: "usd",
            }}
          >
            <CheckoutPage amount={cartAmount} />
          </Elements>
        </div>
      )}
    </main>
  );
}
