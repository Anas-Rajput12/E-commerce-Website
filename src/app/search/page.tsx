"use client";

import React, { useEffect, useState } from "react";
import groq from "groq";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchQuery.trim()) return;
      setLoading(true);
      setError(null);

      const searchQueryStr = groq`
        *[_type == "product" && (title match "${searchQuery}*" || "${searchQuery}" in tags)] {
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
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Search Results for &quot;{searchQuery}&quot;
        </h1>

        {loading && <p className="text-gray-500 text-center">Loading...</p>}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

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

        {!loading && !error && products.length === 0 && searchQuery.trim() && (
          <p className="text-center text-gray-500 mt-8">
            No products found for &quot;{searchQuery}&quot;.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
