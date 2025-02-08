"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link"; // Add this import statement at the top of your file

import Circles from "@/components/commonContent/Circles";
import Header from "@/components/header/Header";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Retrieve favourites from localStorage
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  const formatPrice = (price, discountPercentage) => {
    return discountPercentage
      ? (price * (1 - discountPercentage / 100)).toFixed(2)
      : price.toFixed(2);
  };

  return (
<div className="md:mx-auto py-20 px-6 lg:px-0 w-full md:max-w-[1124px] flex flex-col items-center gap-12">
      <div className="text-center">
        <h3 className="text-3xl text-gray-800 font-bold mt-2">Your Favourites</h3>
        <p className="text-gray-600 mt-4">Here are the products you have marked as your favourites.</p>
      </div>

      {favourites.length === 0 && (
        <div className="text-center text-gray-500">You have no favourites yet!</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favourites.map((product) => (
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
              <div className="absolute top-2 right-2">
                <FaHeart className="text-red-500" />
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
              <Link
                href={`/product/${product._id}`} // Link to the dynamic product details page
                className="text-sm text-blue-600 font-medium underline"
              >
                View Details
              </Link>
              <Link href="/login">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-md transition"
                >
                  Add to Cart
                </button>
              </Link>
            </div>

            <div className="mt-auto py-2 flex justify-center">
              <Circles/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
