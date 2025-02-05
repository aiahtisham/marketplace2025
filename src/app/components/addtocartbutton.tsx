
import React from "react";

interface AddToCartButtonProps {
  productTitle: string;
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productTitle, onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="w-full font-bold bg-[#23A6F0] text-white p-2 rounded-lg mt-4"
    >
      Add {productTitle} to Cart
    </button>
  );
};


export default AddToCartButton;
