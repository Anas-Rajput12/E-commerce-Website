"use client";

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

async function fetchProductById(id: string) {
  const query = `
    *[_type == "product" && _id == $id][0]{
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      discountPercentage,
      isNew
    }
  `;
  return client.fetch(query, { id });
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>(); // ✅ get id from URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-96">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            {product.discountPercentage ? (
              <>
                <span className="text-lg line-through text-gray-400">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-2xl text-green-600 font-semibold">
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl text-green-600 font-semibold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
