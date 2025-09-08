"use client";

import React, { useEffect, useState } from "react";
import groq from "groq";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Header from "@/components/header/Header";

interface Product {
  _id: string;
  title: string;
  description: string;
  productImage?: string;
  price: number;
  tags: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");       // Controlled input
  const [searchTerm, setSearchTerm] = useState<string>(""); // Term to fetch
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const searchQueryStr = groq`
        *[_type == "product" && (title match "${searchTerm}*" || "${searchTerm}" in tags)] {
          _id,
          title,
          description,
          "productImage": productImage.asset->url,
          price,
          tags,
          discountPercentage,
          isNew
        }
      `;

      try {
        const results: Product[] = await client.fetch(searchQueryStr);
        setProducts(results);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(query.trim());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Product Search
        </h1>

        {/* Search Input */}
        <div className="flex mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && <p className="text-gray-500 text-center">Loading...</p>}

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {/* Products Grid */}
        {products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition duration-200 flex flex-col"
              >
                <Image
                  src={product.productImage || "/placeholder.png"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="font-bold text-lg text-gray-800 mb-2 truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 flex-grow truncate">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage && (
                    <p className="text-sm text-green-600">
                      Discount: {product.discountPercentage}%
                    </p>
                  )}
                  {product.isNew && (
                    <span className="mt-2 inline-block text-sm text-blue-600 font-medium">
                      New Arrival
                    </span>
                  )}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => alert(`${product.title} added to cart`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No results */}
        {!loading && !error && products.length === 0 && searchTerm && (
          <p className="text-center text-gray-500 mt-8">
            No products found for &quot;{searchTerm}&quot;.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
