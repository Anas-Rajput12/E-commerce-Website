"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  quantity: number;
  imageUrl: string;
  isNew?: boolean;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Retrieve cart from localStorage
  const loadCartFromLocalStorage = (): Product[] => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  };

  // Save cart to localStorage
  const saveCartToLocalStorage = (updatedCart: Product[]) => {
    try {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  };

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    const cartWithQuantity = cartData.map((product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));
    setCart(cartWithQuantity);
  }, []);

  // Handle removing an item from the cart
  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cart.filter((product) => product._id !== productId);
    saveCartToLocalStorage(updatedCart);
  };

  // Handle changing quantity
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent invalid quantities
    const updatedCart = cart.map((product) =>
      product._id === productId ? { ...product, quantity: newQuantity } : product
    );
    saveCartToLocalStorage(updatedCart);
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    return cart
      .reduce((total, product) => {
        const discountedPrice = product.discountPercentage
          ? product.price * (1 - product.discountPercentage / 100)
          : product.price;
        return total + discountedPrice * product.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          Your cart is empty. Start shopping now!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cart.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                    New
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-gray-400 line-through font-medium text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-bold text-lg">
                    $
                    {product.discountPercentage
                      ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
                      : product.price.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-100">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product._id)}
                  className="text-red-500 text-sm font-medium hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Cart Summary</h3>
        <div className="flex justify-between mb-4 text-lg">
          <span className="font-medium text-gray-600">Total Items:</span>
          <span className="font-semibold text-gray-800">
            {cart.reduce((acc, product) => acc + product.quantity, 0)}
          </span>
        </div>
        <div className="flex justify-between mb-6 text-lg">
          <span className="font-medium text-gray-600">Total Price:</span>
          <span className="font-semibold text-green-600">${calculateTotalPrice()}</span>
        </div>
        <Link href="/checkout">
          <button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
