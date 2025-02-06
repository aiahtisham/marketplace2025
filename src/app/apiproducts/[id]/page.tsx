import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; 
import Link from "next/link";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  try {
    const query = `*[_type == "product" && _id == $id] {
      "id": _id,
      title,
      price,
      description,
      discountPercentage,
      "imageUrl": productImage.asset->url,
      tags
    }[0]`;

    const product = await client.fetch(query, { id });

    if (!product) {
      return <div className="text-center text-gray-600 p-6">Product not found!</div>;
    }

    return (
      <div className="max-w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6">
        <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-6">{product.title}</h1>

        {/* Layout for Image and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Product Image */}
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-md mx-auto"
            priority
          />

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-gray-800">
              Price: <span className="text-blue-600">${product.price}</span>
            </p>
            <p className="mt-3 text-sm text-gray-600 text-justify">
              {product.description}
            </p>
            {product.discountPercentage > 0 && (
              <p className="mt-3 text-sm font-medium text-green-500">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <p className="mt-3 text-sm text-gray-500">
              Tags: {product.tags?.join(", ") || "None"}
            </p>

            <button className="w-full mt-6 bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-blue-700 focus:ring focus:ring-blue-300 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Centered Return Button */}
        <div className="flex justify-center mt-6">
          <Link href="/">
            <button className="bg-gray-200 text-blue-950 py-2 px-6 rounded-lg font-medium text-sm hover:bg-gray-300 transition">
              Return to Main
            </button>
          </Link>
        </div>
      </div>
    );
  } catch {
    return <div className="text-center text-red-500 p-6">Error loading product</div>;
  }
};

export default ProductPage;