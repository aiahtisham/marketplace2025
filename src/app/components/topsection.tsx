import React from "react";

export default function TopSection() {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: 'url(/image/background.png)' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-white text-center md:text-left md:ml-20 lg:ml-40">
            <h5 className="text-[14px] md:text-[16px] text-[#252B42] font-bold mb-2 md:mb-4">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[36px] md:text-[48px] lg:text-[58px] text-[#252B42] font-bold mb-4 md:mb-6">
              ABOUT US
            </h1>
            <h4 className="text-[16px] md:text-[20px] text-[#252B42]">
              We know how large objects will act,
            </h4>
            <h4 className="text-[16px] md:text-[20px] text-[#252B42] mb-6 md:mb-10">
              but things on a small scale
            </h4>

            <button className="bg-[#23A6F0] border w-[160px] md:w-[195px] h-[45px] md:h-[52px] text-white rounded-lg text-[14px] font-bold">
              Get Quote Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
