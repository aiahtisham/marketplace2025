"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../components/addtocartbutton";
import CartSummary from "../components/cardsummary";
import Wishlist from "../components/wishlist";
import { Product } from "@/utily/type";

const sanity = sanityClient({
  projectId: "4q3mdds0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortOrder, setSortOrder] = useState<string>("");

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
      setTotalProducts(data.length);
      filterProducts(data, searchQuery, selectedTag, sortOrder);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(products, searchQuery, selectedTag, sortOrder);
  }, [searchQuery, selectedTag, sortOrder, products]);

  useEffect(() => {
    // Load wishlist from local storage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    // Save wishlist to local storage whenever it changes
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const filterProducts = (
    data: Product[],
    query: string,
    tag: string,
    sortOrder: string
  ) => {
    let filtered = data;
    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (tag) {
      filtered = filtered.filter((product) => product.tags.includes(tag));
    }
    if (sortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
    setTotalProducts(filtered.length);
    setCurrentPage(1);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToWishlist = (product: Product) => {
    if (!wishlist.some((item) => item._id === product._id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
    }
  };

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products From APIs Data</h2>
      
      {/* Search, Filter, and Sort */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All Tags</option>
          {[...new Set(products.flatMap((p) => p.tags))].map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <select
          className="border p-2 rounded"
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(Number(e.target.value))}
        >
          <option value={4}>4 items per page</option>
          <option value={8}>8 items per page</option>
          <option value={12}>12 items per page</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/apiproducts/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="mt-2 text-sm">{product.description.substring(0, 100)}...</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-black font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-blue-700">{product.discountPercentage}% OFF</p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={`${product._id}-${tag}`}
                    className="text-xs bg-[#23A6F0] font-bold text-white rounded-lg px-1 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <AddToCartButton
                productTitle={product.title}
                onAddToCart={() => addToCart(product)}
              />
              <button
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={() => addToWishlist(product)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartSummary cart={cart} onRemove={removeFromCart} onClearCart={clearCart} />
      <Wishlist wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} />

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
