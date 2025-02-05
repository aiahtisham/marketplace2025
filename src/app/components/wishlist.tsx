// components/Wishlist.tsx
import React from "react";
import { Product } from "@/utily/type";

interface WishlistProps {
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, onRemoveFromWishlist }) => {
  return (
    <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Your Wishlist</h3>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlist.map((product) => (
            <div key={product._id} className="flex justify-between items-center mt-2">
              <span>{product.title}</span>
              <button
                className="text-red-500 hover:text-red-700 ml-2"
                onClick={() => onRemoveFromWishlist(product._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
