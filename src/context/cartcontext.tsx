// src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartProduct {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, totalQuantity, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
