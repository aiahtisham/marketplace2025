import React from "react";

export default function btsection (){
return(
  <div className="h-[636px]">
    <section className="bg-cover bg-center h-screen flex items-center bg-[#23A6F0]"
      style={{ backgroundImage: 'url(/image/bg2.png) sm:hidden' }}
    >
      <div className="container mx-auto px-8">
        <div className="ml-40 text-white">
          <h5 className="text-[16px] text-white font-bold mb-4">WORK WITH US</h5>
          <h2 className="text-[40px] text-white font-bold mb-4">Now Let’s grow Your</h2>
          <p className="text-[14px]">
          The gradual accumulation of information about atomic and </p>
          <p className="text-[14px] mb-10">
          small-scale behavior during the first quarter of the 20th </p>
          
          <button className="border w-[132px] h-[52px] text-white rounded-lg text-[14px] font-bold ">
            Button
          </button>
        </div>
      </div>
    </section>
  </div>
)
}