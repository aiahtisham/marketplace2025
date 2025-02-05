import React from "react";
import Link from "next/link";
import Navbar2 from "../components/navbar2";
import { SlArrowRight } from "react-icons/sl"
import Footer from "../components/footer";
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import SupportCard2 from "../components/supportcard2";
import Logosection from "../components/logosection";


export default function price(){
  return (
   <div>
    <Navbar2/>
    <div>
      <div className="flex flex-col items-center justify-center my-20">
        <h5 className="text-[#737373] text-[16px] font-bold sm:flex hidden">PRICING</h5>
        <h2 className="text-[#252B42] text-[58px] font-bold mt-20 mb-5">Simple Pricing</h2>
        <div className="items-center flex mb-6">
        <Link href="/" className="text-[14px] font-bold text-[#252B42] mr-4">Home</Link>
        <SlArrowRight className="w-[9px] h-[16px] mr-4"/>
        <a href="#" className="text-[14px] font-bold text-[#737373]">Pricing</a>
        </div>  
        </div>
      </div>   

      <section>
      <div className="flex flex-col items-center justify-center my-8">
        <h2 className="text-[#252B42] text-[40px] font-bold ">PRICING</h2>
        <p className="text-[#737373] text-[14px] font-bold ">Problems trying to resolve the conflict between</p>
        <p className="text-[#737373] text-[14px] font-bold ">the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
      </section>   
      
      <section>
      <div className="flex flex-row items-center justify-center my-8 gap-3">
        <h1 className="text-[#252B42] text-[16px] font-bold ">MONTHLY</h1>
        <img src="/image/toggle.png" alt="toggle" />
        <h2 className="text-[#252B42] text-[16px] font-bold ">YEARLY</h2>
        <button className="bg-[#B2E3FF] text-[#23A6F0] w-[109px] h-[44px] text-[14px]  font-bold rounded-3xl ">SAVE 25%</button>
        </div>
      </section>        

      <section>

      <div className="flex flex-col md:flex-row justify-center  p-8 bg-white mb-2">

<SupportCard2
  icon= "FREE"
  title="Get Support"
  email1="georgia.young@example.com"
  email2="georgia.young@ple.com"
  buttonText="Submit Request"
  className={"bg-white"}
/>


<SupportCard2
  icon="STANDARD"
  title="Organize across all"
  email1="apps by hand"
  email2="19.99"
  buttonText="Submit Request"
  className ={"bg-blue-900"}
/>


<SupportCard2
  icon= "PREMIUM"
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

      </section>

      <Logosection/>

      <section>
              <div className="flex flex-col items-center justify-center my-8">
              <div className="text-[#252B42] text-[40px] font-bold my-5"><h2>Start your 14 days free trial</h2></div>
              <div className="text-[#737373] text-[14px] ">
                <p>Met minim Mollie non desert Alamo est sit cliquey dolor</p> 
                <p className="mb-5 text-center">do met sent. RELIT official consequent.</p></div>
      
              <div>
                <button className="bg-[#23A6F0] text-white font-bold text-[14px] w-[186px] h-[52px] mt-2 mb-6">Try it free now</button>
              </div> 
              <div className="flex justify-center items-center gap-5 mb-10">
                <FaTwitter className="text-[#55ACEE] w-[30px] h-[24.49px]"/>
                <IoLogoFacebook className="text-[#395185] w-[30px] h-[30px]"/>
                <FaInstagram className="text-[#55ACEE] w-[30px] h-[30px]"/>
                <TiSocialLinkedin className="bg-[#0A66C2] text-white w-[30px] h-[29.88px]"/>
             </div> 
              </div>
            </section>  
           
   <Footer/>
   </div>

  )
}