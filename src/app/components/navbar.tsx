"use client"
import React, { useState } from "react";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
 
  

  return (
    <header className="border-b mx-auto flex-col w-full h-58px gap-4">
      <div className="bg-white flex justify-between items-center px-8 py-4">
        <h1 className="text-[24px] font-bold text-[#252B42]">Bandage</h1>

       
        <button
          className="lg:hidden text-[#252B42] text-[24px]"
          onClick={toggleMenu}
        >
          ☰
        </button>

        
        <nav className="hidden lg:flex items-center space-x-8 text-2xl">
          <Link href="/" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Home</Link>
          <Link href="/shop" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Shop</Link>
          <Link href="/about" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">About</Link>
          <Link href="/team" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Blog</Link>
          <Link href="/contact" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Contact</Link>
          <Link href="/price" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Pages</Link>
        </nav>

        
        <div className="text-[#23A6F0] flex items-center space-x-6">
          <BsPerson />
          

          
        
      
        <a
          className="mr-4 text-[14px] font-bold cursor-pointer"
        >
          Login
        </a>
      


          <h1> /</h1>
          <a href="#" className=" text-[14px] font-bold">Register</a>
          <CiSearch />
          <FiShoppingCart />
          <FaRegHeart />
        </div>
      </div>

     
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white text-center py-4`}
      >
        <Link href="/" className="block text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal py-2">Home</Link>
        <Link href="/shop" className="block text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal py-2">Shop</Link>
        <Link href="/about" className="block text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal py-2">About</Link>
        <Link href="/team" className="block text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal py-2">Blog</Link>
        <Link href="/contact" className="block text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal py-2">Contact</Link>
        <Link href="/price" className="block text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal py-2">Pages</Link>
      </div>
    </header>
  );
}
