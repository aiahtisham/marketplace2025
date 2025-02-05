import React from "react"
import Link from "next/link"
import { BsTelephone } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import { TfiEmail } from "react-icons/tfi";
export default function navbar(){
  return(
    
      <header className ="border-b mx-auto flex-col w-1438px h-58px gap-40px">
        <div className="bg-[#252B42] text-white font-bold py-4 text-sm flex justify-between items-center px-8 w-full flex-wrap hidden sm:flex">
        <BsTelephone className="w-[16px] h-[16px] mx-1 my-1" />
        <div className="font-bold text-[14px]">(225)555-0118
        </div>
        <div className="ml-10 font-bold text-[14px] flex"><TfiEmail className="w-[16px] h-[16px] mx-1 my-1"/>michelle.rivera@example.com
        </div>
          <div className="text-center flex-1 font-bold text-[14px]">Follow Us and get a chance of win 80% off
          </div>
         <div className="text-right font-bold text-[14px]">Follow Us : 
         </div>
         <Link href={"https://www.instagram.com/"}><FaInstagram className="text size-5 mr-3 ml-2"/></Link>
         <Link href={"https://www.youtube.com/"}><BsYoutube className="text size-5 mr-3"/></Link>
         <Link href={"https://www.facebook.com/"}><FaFacebook className="text size-5 mr-3"/></Link>
         <Link href={"https://twitter.com/"}><FaTwitter className="text size-5 mr-3"/></Link>
        </div>

       
        

      </header>
    
  )
}