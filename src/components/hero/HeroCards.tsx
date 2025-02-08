"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Circles from "../commonContent/Circles";
import { client } from "@/sanity/lib/client";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export async function fetchProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function HeroCards() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load products.");
        setLoading(false);
      }
    };
    getProducts();

    const isLoggedIn = !!localStorage.getItem("userToken");
    setIsUserLoggedIn(isLoggedIn);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleFavouriteToggle = (product) => {
    let updatedFavourites;
    if (favourites.some((fav) => fav._id === product._id)) {
      updatedFavourites = favourites.filter((fav) => fav._id !== product._id);
    } else {
      updatedFavourites = [...favourites, product];
    }
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const handleAddToCart = (product) => {
    if (!isUserLoggedIn) {
      // Redirect to login or show modal
      alert("Please log in to add items to the cart.");
      window.location.href = "/login"; // Redirect to login
      return;
    }

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  const showMore = () => setVisibleCount((prevCount) => prevCount + 6);
  const showLess = () => setVisibleCount(6);

  const formatPrice = (price, discountPercentage) =>
    discountPercentage
      ? (price * (1 - discountPercentage / 100)).toFixed(2)
      : price.toFixed(2);

  return (
    <div className="md:mx-auto py-20 px-6 lg:px-0 w-full md:max-w-[1124px] flex flex-col items-center gap-12">
      <div className="text-center">
        <h4 className="text-lg text-gray-500 font-medium">Featured Products</h4>
        <h3 className="text-3xl text-gray-800 font-bold mt-2">BESTSELLER PRODUCTS</h3>
        <p className="text-gray-600 mt-4">Discover the best-selling products carefully curated for you.</p>
      </div>

      {loading && <div className="text-center text-gray-500">Loading products...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product._id}
            className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                  New
                </span>
              )}
              <div
                onClick={() => handleFavouriteToggle(product)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                {favourites.some((fav) => fav._id === product._id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400" />
                )}
              </div>
            </div>

            <div className="p-4 flex flex-col items-start gap-3">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 line-through font-medium">${product.price.toFixed(2)}</span>
                <span className="text-green-600 font-bold">
                  ${formatPrice(product.price, product.discountPercentage)}
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-2 gap-3">
              <Link href={`/product/${product._id}`}>
                <button className="text-sm text-blue-600 font-medium underline">View Details</button>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-md transition"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-auto py-2 flex justify-center">
              <Circles />
            </div>
          </div>
        ))}
      </div>

      {products.length > 6 && (
        <div className="flex justify-center gap-4 mt-8">
          {visibleCount < products.length ? (
            <button
              onClick={showMore}
              className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-md transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-6 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 shadow-md transition"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
