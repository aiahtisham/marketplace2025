import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
export default function footer(){
  return (
    <footer>

<div className="bg-slate-50 flex justify-around items-center pr-12 py-10">
          <h1 className="text-[24px] font-bold text-[#252B42]"> Bandage</h1>
          <nav className="md:flex items-center space-x-3 ">
            <a href="https://www.facebook.com/" className="text-[#23A6F0]  hover:text-black"><FaFacebook className="w-[24px] h-[24px] text size-5 mr-3 ml-2"/></a>
            <a href="https://www.instagram.com/" className="text-[#23A6F0]  hover:text-black"><FaInstagram className="w-[24px] h-[24px] text size-5 mr-3 ml-2"/></a>
            <a href="https://twitter.com/" className="text-[#23A6F0]  hover:text-black"><FaTwitter className="w-[24px] h-[24px] text size-5 mr-3 ml-2"/></a>
           
          </nav></div>

    <div className="bg-white text-[#252B42] py-10">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      
      <div className="w-full sm:w-1/2 lg:w-[10%] mb-6">
        <h2 className="text-[#252B42] text-[16px] font-bold mb-4">Company info</h2>
        <ul className="space-y-3">
          <li><Link href="/about" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">About Us</Link></li>
          <li><Link href="/" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Home</Link></li>
          <li><Link href="/team" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Blog</Link></li>
          <li><Link href="/contact" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 lg:w-[10%] mb-6">
        <h2 className="text-[#252B42] text-[16px] font-bold mb-4">Legal</h2>
        <ul className="space-y-3">
          <li><Link href="/about" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">About Us</Link></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Carrier</a></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">We are hiring</a></li>
          <li><Link href="/team" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Blog</Link></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 lg:w-[15%] mb-6">
        <h2 className="text-[#252B42] text-[16px] font-bold mb-4">Features</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Bussiness Marketing</a></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">User Analytic</a></li>
          <li><Link href="/team" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Live Chat</Link></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Unlimited Support</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 lg:w-[15%] mb-6">
        <h2 className="text-[#252B42] text-[16px] font-bold mb-4">Resources</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">IOS & Andriod</a></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Watch a Demo</a></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">Customers</a></li>
          <li><a href="#" className="text-[#737373] text-[14px] font-bold hover:text-gray-300">API</a></li>
        </ul>
      </div>

      
      <div className="w-full sm:w-1/2 lg:w-[30%] mb-6">
      <h2 className="text-[#252B42] text-[16px] font-bold mb-4">Get in Touch</h2>
        
        <div className="w-[321px] h-[58px] flex flex-row">
          <input type="email"
          placeholder="Your Email"
          className="border rounded-md p-4 text-[14px] font-bold text-[#737373] bg-[#E6E6E6]"/>
          <button className="w-[117px] h-[58px] text-white bg-[#23A6F0] text-[14px]">
            Subscribe
          </button>
        </div>
      </div>

     
      
    </div>

    {/* Bottom Footer */}
    <div className="mt-10 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</div>

</footer>

  )
}