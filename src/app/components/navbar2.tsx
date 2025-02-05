"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="border-b mx-auto flex-col w-full h-58px gap-4">
      <div className="bg-white flex justify-between items-center px-8 py-4">
        <h1 className="text-[24px] font-bold text-[#252B42] ml-12">Bandage</h1>
        <button
          className="lg:hidden text-[#252B42] text-[24px]"
          onClick={toggleMenu}
        >
          ☰
        </button>

        
        <nav className="hidden lg:flex items-center space-x-8 text-2xl">
          <Link href="/" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Home</Link>
          <Link href="/shop" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Product</Link>
          <Link href="/about" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">About</Link>
          <Link href="/price" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Pricing</Link>
          <Link href="/contact" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Contact</Link>
        </nav>

        <div className="text-[#23A6F0] flex items-center space-x-6">
          <a href="#" className="mr-4 font-bold text-[14px]">Login</a>
          <button className="bg-[#23A6F0] text-white px-3 py-1 rounded w-[214px] h-[52px]">Become a member</button>
        </div>
      </div>

      
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white text-center py-0`}
      >
        <Link href="/" className="block text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal py-2">Home</Link>
        <Link href="/shop" className="block text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal py-2">Product</Link>
        <Link href="/about" className="block text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal py-2">About</Link>
        <Link href="/price" className="block text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal py-2">Pricing</Link>
        <Link href="/contact" className="block text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal py-2">Contact</Link>
      </div>
    </header>
  );
}
