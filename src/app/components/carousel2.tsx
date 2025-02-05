import React from "react";
export default function carousel2() {
  return (
    <div className="w-full p-5 flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="w-full md:w-[40%] flex justify-center items-center">
        <img
          src="image/hero3.png"
          alt="men"
          className="w-full h-auto md:w-[725px] md:h-[682px] object-cover"
        />
      </div>

      <div className="w-full md:w-[40%] p-4 text-center md:text-left">
        <h5 className="text-[#BDBDBD] text-[16px] font-bold">SUMMER 2020</h5>
        <h1 className="text-[#252b42] font-bold text-2xl md:text-[40px] pt-2">
          Part of the Neural
        </h1>
        <h1 className="text-[#252b42] font-bold text-2xl md:text-[40px]">
          Universe
        </h1>
        <h4 className="text-[#737373] text-lg md:text-[20px] pt-5">
          We know how large objects will act
        </h4>
        <h4 className="text-[#737373] text-lg md:text-[20px]">
          but things on a small scale
        </h4>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center md:items-start">
          {/* Added min-width for better button scaling */}
          <button className="bg-[#2DC071] min-w-[156px] h-[52px] text-white text-[14px] font-bold rounded-md">
            BUY NOW
          </button>
          <button className="bg-white min-w-[156px] h-[52px] text-[#2dc071] text-[14px] font-bold border-[#2DC071] border ml-0 sm:ml-8 rounded-md">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
