import React from "react";

import Navbar2 from "../components/navbar2";
import Topsection2 from "../components/topsection2";
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import SupportCard from "../components/supportcard";
import Footer from "../components/footer";

export default function team(){
  return (
    <div>
      <Navbar2/>
      <Topsection2/>

      <main className="flex flex-col justify-center items-center my-6 sm:my-10">
  <h6 className="text-[12px] sm:text-[14px] text-[#252B42] font-bold">VISIT OUR OFFICE</h6>
  <h2 className="text-[28px] sm:text-[40px] text-[#252B42] font-bold">We help small businesses</h2>
  <h2 className="text-[28px] sm:text-[40px] text-[#252B42] font-bold">with big ideas</h2>
      </main>

         
    <div className="flex flex-col md:flex-row justify-center  p-8 bg-white mb-2">

      <SupportCard
        icon= {<BsTelephone className=" w-[72] h-[72] text-[#23A6F0]"/> }
        title="Get Support"
        email1="georgia.young@example.com"
        email2="georgia.young@ple.com"
        buttonText="Submit Request"
        className={"bg-white"}
      />

     
      <SupportCard
        icon={<FaLocationDot className=" w-[72] h-[72] text-[#23A6F0]"/> }
        title="Get Support"
        email1="georgia.young@example.com"
        email2="georgia.young@ple.com"
        buttonText="Submit Request"
        className ={"bg-blue-900"}
      />

  
      <SupportCard
        icon={<IoIosMail className=" w-[72] h-[72] text-[#23A6F0]"/> }
        title="Get Support"
        email1="georgia.young@example.com"
        email2="georgia.young@ple.com"
        buttonText="Submit Request"
        className ={"bg-white"}
      />
    </div>

    <div className="flex flex-col justify-center items-center mb-10">
        <img src="/image/arrow2.png" alt="arrow" className="mb-1" />
        <h6 className="text-[16px] text-[#252B42] font-bold">WE Cant WAIT TO MEET YOU</h6>
        <h2 className="text-[58px] text-[#252B42] font-bold mb-4">Lets Talk</h2>
        <button className="h-[52px] w-[186px] rounded-md bg-[#23A6F0] text-[14px] text-white bg">Try it free now</button>
      </div>
      <Footer/>
        
      </div>
  )
}