import React from "react";
import { Product } from "@/utily/type";
import Link from "next/link";

// Define the type for the grouped products
interface GroupedProduct extends Product {
  quantity: number;
}

interface CartSummaryProps {
  cart: Product[];
  onRemove: (productId: string) => void;
  onClearCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, onRemove, onClearCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const totalQuantity = cart.length;

  // Update the type of 'groupedProducts' to an object with string keys and values of type 'GroupedProduct'
  const groupedProducts = cart.reduce((acc: { [key: string]: GroupedProduct }, product) => {
    if (acc[product._id]) {
      acc[product._id].quantity += 1;
    } else {
      acc[product._id] = { ...product, quantity: 1 };
    }
    return acc;
  }, {});

  const productList = Object.values(groupedProducts);

  // Serialize cart data into query parameters
  const cartData = encodeURIComponent(JSON.stringify(productList));

  return (
    <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Cart Summary</h3>
      {productList.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {productList.map((product: GroupedProduct) => (
            <div key={product._id} className="flex justify-between items-center mt-2">
              <span>{product.title} x {product.quantity}</span>
              <span className="font-bold">${(product.price * product.quantity).toFixed(2)}</span>
              <button
                className="text-blue-800 hover:text-blue-500 ml-2"
                onClick={() => onRemove(product._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold">Total Quantity:</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="font-bold">Total Price:</span>
        <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
      </div>

      {cart.length > 0 && (
        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-800 text-white rounded-md"
            onClick={onClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4 flex justify-center">
          <Link href={`/checkout?cartItems=${cartData}&totalPrice=${totalPrice}`}>
            <button className="px-4 py-2 bg-green-800 text-white rounded-md">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
