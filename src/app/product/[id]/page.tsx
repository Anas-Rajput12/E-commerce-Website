import React from "react";
import { client } from "@/sanity/lib/client";

export async function fetchProductById(id: string) {
  const query = `
    *[_type == "product" && _id == "${id}"]{
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

  try {
    const product = await client.fetch(query);
    return product[0]; // Return the first product as the query returns an array
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

interface ProductProps {
  params: {
    id: string;
  };
}

const ProductDetails = async ({ params }: ProductProps) => {
  const product = await fetchProductById(params.id); // Fetch the product based on the id

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-96">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Price Section */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-lg font-medium line-through text-gray-400">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-2xl text-green-600 font-semibold">
              $
              {product.discountPercentage
                ? (
                    product.price * (1 - product.discountPercentage / 100)
                  ).toFixed(2)
                : product.price.toFixed(2)}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
