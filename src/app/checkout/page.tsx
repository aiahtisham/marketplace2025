'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Get the cart data from the API route when the component mounts
    const fetchCartData = async () => {
      const params = new URLSearchParams(window.location.search);
      const cartItemsData = params.get('cartItems');
      const totalPriceData = params.get('totalPrice');

      if (cartItemsData && totalPriceData) {
        const response = await fetch(`/api/cart?cartItems=${cartItemsData}&totalPrice=${totalPriceData}`);
        const data = await response.json();
        setCartItems(data.cartItems);
        setTotalPrice(data.totalPrice);
      }
    };

    fetchCartData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Checkout</h3>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Cart Summary</h4>
        {cartItems.map((product) => (
          <div key={product._id} className="flex justify-between items-center mt-2">
            <span>{product._id} - {product.title} x {product.quantity}</span>
            <span className="font-bold">${(product.price * product.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold">Total Price:</span>
          <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <h4 className="text-lg font-semibold">Shipping Address</h4>
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Address"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="City"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Postal Code"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <h4 className="text-lg font-semibold">Billing Details</h4>
        <input
          type="text"
          placeholder="Card Number"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Expiration Date (MM/YY)"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="CVC"
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-green-800 text-white rounded-md"
          >
            Place Order
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <Link href="/">
          <button className="px-4 py-2 bg-green-800 text-white rounded-md">
            Back to Main Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
