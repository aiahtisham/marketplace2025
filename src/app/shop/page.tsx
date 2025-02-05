import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl"
import { RiArrowDropDownLine } from "react-icons/ri";
import Navbar2 from "../components/navbar2";
import Logosection from "../components/logosection";
import Footer from "../components/footer";
import ProductList2 from "../components/productlist2";

export default function shop(){
  return (
    <div>
      <Navbar2/>

      <div className="max-w-7xl mx-auto px-4"> 
      <div className="bg-[#FAFAFA] flex justify-between text-grey items-center h-[92px] px-8 py-4">
      <h2 className="text-[24px] font-bold text-[#252B42]"> Shop</h2>
      <div className="items-center flex">
        <Link href="/" className="text-[14px] font-bold text-[#252B42] mr-4">Home</Link>
        <SlArrowRight className="w-[9px] h-[16px] mr-4"/>
        <a href="#" className="text-[14px] font-bold text-[#BDBDBD] mr-10">Shop</a>
        </div>  
        </div>
      

           
        <div className="bg-[#FAFAFA] flex flex-col md:flex-row justify-center items-center gap-4 p-12">
          
           <div className="w-full sm:w-72 bg-white rounded-lg \">
             <div className="relative">
               <Image
                 src="/image/card1.jpg"
                 alt="Post 1"
                 width={223}
                 height={205}
                 className="object-cover"
               />
               <span className="absolute inset-20">
                 <h6 className=" text-white text-[16px] font-bold">CLOTHS</h6>
                  <h6 className=" text-white text-[14px] pt-4 ">5 ITEMS</h6>
               </span>
               
              </div>
            </div>
            <div className="w-full sm:w-72 bg-white rounded-lg \">
             <div className="relative">
               <Image
                 src="/image/card2.png"
                 alt="Post 2"
                 width={223}
                 height={205}
                 className="object-cover"
               />
                <span className="absolute inset-20">
                 <h6 className=" text-white text-[16px] font-bold">CLOTHS</h6>
                  <h6 className=" text-white text-[14px] pt-4 ">5 ITEMS</h6>
               </span>
              </div>
            </div>
            <div className="w-full sm:w-72 bg-white rounded-lg \">
             <div className="relative">
               <Image
                 src="/image/card3.png"
                 alt="Post 3"
                 width={223}
                 height={205}
                 className="object-cover"
               />
                <span className="absolute inset-20">
                 <h6 className=" text-white text-[16px] font-bold">CLOTHS</h6>
                  <h6 className=" text-white text-[14px] pt-4 ">5 ITEMS</h6>
               </span>
              </div>
            </div>
            <div className="w-full sm:w-72 bg-white rounded-lg \">
             <div className="relative">
               <Image
                 src="/image/card4.png"
                 alt="Post 4"
                 width={223}
                 height={205}
                 className="object-cover"
               />
                <span className="absolute inset-20">
                 <h6 className=" text-white text-[16px] font-bold">CLOTHS</h6>
                  <h6 className=" text-white text-[14px] pt-4 ">5 ITEMS</h6>
               </span>
              </div>
            </div>
            <div className="w-full sm:w-72 bg-white rounded-lg \">
             <div className="relative">
               <Image
                 src="/image/card5.png"
                 alt="Post 5"
                 width={223}
                 height={205}
                 className="object-cover"
               />
                <span className="absolute inset-20">
                 <h6 className=" text-white text-[16px] font-bold">CLOTHS</h6>
                  <h6 className=" text-white text-[14px] pt-4 ">5 ITEMS</h6>
               </span>
              </div>
            </div>
         </div>
       </div>
       
       <section>
       <div className="max-w-7xl mx-auto px-4 py-10"> 
      <div className="bg-white flex justify-between text-grey items-center h-[92px] px-8 py-4">
      <label className="text-[14px] font-bold text-[#737373]"> Showing all 12 results</label>
      
      <div className="items-center flex">
      <label className="text-[14px] font-bold text-[#737373] mx-2">Views :</label>
        <button className="bg-[#ECECEC] w-[46px] h-[46px]"><img src="/image/vec1.png" alt="vec1" className="p-4" /></button>
        <button className="bg-[#ECECEC] w-[46px] h-[46px] mx-2"><img src="/image/vec2.png" alt="vec2" className="p-4" /></button>
        </div>

        <div className="items-center flex">
        <button className="bg-[#DDDDDD] text-[14px] font-bold text-[#737373] w-[141px] h-[50px] p-4 flex">Popularity<RiArrowDropDownLine  className="text-[30px] pb-2"/></button>
        <button className="bg-[#23A6F0] text-[14px] font-bold text-white w-[94px] h-[50px] mx-2">Filter</button>
        </div>

        </div>
        </div>
        
       </section>
       
       <ProductList2/>
       
       <div className="flex items-center justify-center">
      <button className="bg-[#F3F3F3] text-[14px]  font-bold w-[50px] h-[50px] text-[#BDBDBD]">First</button>
      <button className="bg-[#E9E9E9] text-[14px]  font-bold w-[40px] h-[50px] text-[#23A6F0]">1</button>
      <button className="bg-[#23A6F0] text-[14px]  font-bold w-[40px] h-[50px] text-white">2</button>
      <button className="bg-[#E9E9E9] text-[14px]  font-bold w-[40px] h-[50px] text-[#23A6F0]">3</button>
      <button className="bg-[#E9E9E9] text-[14px]  font-bold w-[50px] h-[50px] text-[#23A6F0]">Next</button>
       </div>
       <Logosection />
       <Footer/>
       
       
    </div>
  )
}