"use client";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Cards from "./cards";
import { client } from "@/sanity/lib/client";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch products
        const productQuery = `*[_type == "product"] {
          _id,
          title,
          category,
          price,
          image
        }`;
        const products = await client.fetch(productQuery);

        // Fetch unique categories
        const categoryQuery = `*[_type == "category"] {
          _id,
          title
        }`;
        const categories = await sanityClient.fetch(categoryQuery);

        setProducts(products);
        setFilteredProducts(products);
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Filter products by selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <>
      {/* Header Section */}
      <div className="mx-auto max-w-[1440px] h-auto md:h-[92px] flex justify-center items-center mb-20">
        <div className="lg:max-w-[1036px] md:max-w-[950px] w-full h-[44px] flex flex-col lg:flex-row gap-8 justify-between items-center px-10 lg:px-5">
          <h3 className="text-2xl text-[#252B42] font-[700]">Shop</h3>
          <div className="flex items-center gap-3 text-sm font-[700]">
            <Link href="/" className="text-[#252B42]">
              Home
            </Link>
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />
            <Link href="/shop" className="text-[#BDBDBD]">
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mx-auto lg:max-w-[1050px] w-full md:max-w-[950px] h-auto lg:h-[98px] my-20">
        <div className="flex justify-between items-center px-10 lg:px-5">
          <h6>Showing {filteredProducts.length} results</h6>
          <div className="flex items-center gap-4">
            <select
              className="w-[200px] h-[40px] bg-white border border-gray-300 rounded px-3 text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
            <button
              className="btn w-[94px] h-[40px] bg-[#23A6F0] text-white rounded"
              onClick={() => setSelectedCategory("")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="mx-auto px-10 lg:px-5 lg:max-w-[1088px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="w-full h-auto bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="w-full h-[200px] bg-gray-200">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">{product.title}</h4>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer or Additional Components */}
      <div className="mx-auto px-10 lg:px-5 lg:max-w-[1050px] flex justify-around gap-6 mt-20">
        <Image src="/Images/logo1.png" alt="Logo" width={100} height={40} />
        <Image src="/Images/logo2.png" alt="Logo" width={80} height={40} />
        <Image src="/Images/logo3.png" alt="Logo" width={100} height={40} />
        <Image src="/Images/logo4.png" alt="Logo" width={100} height={40} />
      </div>

      {/* Cards Component */}
      <Cards />
    </>
  );
}
