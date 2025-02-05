import React from "react"
import Link from "next/link"
import { BsTelephone } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { BsPerson } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { FiShoppingCart } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa"
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
export default function navbargreen(){
  return(
    
      <header className ="border-b mx-auto flex-col w-1438px h-58px gap-40px">
        <div className="bg-[#23856D] text-white font-bold py-4 text-sm flex justify-between item px-8 w-full">
        <BsTelephone className="w-[16px] h-[16px] mx-1 my-1" />
        <div className="text-[12px]">(225)555-0118
        </div>
        <div className="ml-10 text-[12px] flex"><TfiEmail className="w-[16px] h-[16px] mx-1 my-1"/>michelle.rivera@example.com
        </div>
          <div className="text-center flex-1 font-bold text-[14px]">Follow Us and get a chance of win 80% off
          </div>
         <div className="text-right font-bold text-[14px]">Follow Us : 
         </div>
         <FaInstagram className="text size-5 mr-3 ml-2"/>
         <BsYoutube className="text size-5 mr-3"/>
         <FaFacebook className="text size-5 mr-3"/>
         <FaTwitter className="text size-5 mr-3"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white flex justify-between text-grey items-center px-8 py-4">
          <h1 className="text-[24px] font-bold text-[#252B42]"> Bandage</h1>
          <nav className="md:flex items-center space-x-8 text-2xl">
            <Link href="/" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Home</Link>
            
            <div className="relative group">
            <button className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal flex">Shop
              <RiArrowDropDownLine  className="text-[30px]"/></button>
            <div className="absolute hidden group-hover:flex flex-col bg-white border shadow-lg top-full">
            
              <Link href="/shop" className="hover:text-[#252B42] bg-[#DDDDDD] rounded-lg p-1 font-bold border text-[14px] text-[#737373]">Product
              </Link>
              
            </div>
          </div>
            
            <Link href={"/about"} className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">About</Link>
            <a href="/team" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Blog</a>
            <a href="/contact" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Contact</a>
            <Link href="/price" className="text-[#737373] text-[14px] font-bold hover:text-[#252B42] hover:font-normal">Pages</Link>
          </nav>
          
          <div className="text-[#23A6F0] flex items-center space-x-6">
             <BsPerson/>
             <a href="#" className="mr-4 text-[14px] font-bold">Login</a>
             <h1> /</h1>
             <a href="#" className=" text-[14px] font-bold">Register</a>
             <CiSearch/>
             <FiShoppingCart/>
             <FaRegHeart/>

          </div>
          </div>

        </div>
      </header>
    
  )
}