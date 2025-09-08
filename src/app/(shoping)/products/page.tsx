"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Circles from "@/components/commonContent/Circles";

// Define types
type Product = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
  category: string;
};

type Category = {
  title: string;
};

// Data fetching function (NOT exported)
async function fetchProductsAndCategories() {
  const query = `{
    "products": *[_type == "product"]{
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      discountPercentage,
      isNew,
      category
    },
    "categories": *[_type == "category"]{
      title
    }
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products and categories:", error);
    return { products: [], categories: [] };
  }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { products, categories } = await fetchProductsAndCategories();
        setProducts(products || []);
        setCategories(["All", ...categories.map((cat: Category) => cat.title)]);
      } catch {
        setError("Failed to load products and categories.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Add to cart
  const handleAddToCart = (product: Product) => {
    alert(`${product.title} has been added to the cart!`);
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const showMore = () => setVisibleCount((prev) => prev + 6);
  const showLess = () => setVisibleCount(6);

  const formatPrice = (price: number, discountPercentage?: number) =>
    discountPercentage
      ? (price * (1 - discountPercentage / 100)).toFixed(2)
      : price.toFixed(2);

  return (
    <div className="md:mx-auto py-20 px-6 lg:px-0 w-full md:max-w-[1124px] flex flex-col items-center gap-12">
      <div className="text-center">
        <h4 className="text-lg text-gray-500 font-medium">Featured Products</h4>
        <h3 className="text-3xl text-gray-800 font-bold mt-2">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-gray-600 mt-4">
          Discover the best-selling products carefully curated for you.
        </p>
      </div>

      {loading && (
        <div className="text-center text-gray-500">Loading products...</div>
      )}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-lg shadow-md transition ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product._id}
            className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative h-64">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title || "Product Image"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              ) : (
                <div className="bg-gray-200 flex items-center justify-center h-full rounded-t-lg">
                  <span className="text-gray-500 text-sm">
                    No Image Available
                  </span>
                </div>
              )}
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                  New
                </span>
              )}
            </div>

            <div className="p-4 flex flex-col items-start gap-3">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center gap-3">
                {product.discountPercentage && (
                  <span className="text-gray-400 line-through font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                <span className="text-green-600 font-bold">
                  ${formatPrice(product.price, product.discountPercentage)}
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-2 gap-3">
              <Link
                href={`/product/${product._id}`}
                className="text-sm text-blue-600 font-medium underline"
              >
                View Details
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

      {filteredProducts.length > 6 && (
        <div className="flex justify-center gap-4 mt-8">
          {visibleCount < filteredProducts.length ? (
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
