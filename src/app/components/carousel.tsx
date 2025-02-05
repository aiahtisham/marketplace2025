import React from "react";

export default function Carousel() {
  return (
    <div className="w-full p-5 flex flex-col md:flex-row justify-center items-center bg-[#23856D]">
      <div className="w-full md:w-1/3 p-4 text-center md:text-left">
        <h5 className="text-white text-lg">SUMMER 2020</h5>
        <h1 className="text-white font-bold text-2xl md:text-5xl pt-4">Vita Classic</h1>
        <h1 className="text-white font-bold text-2xl md:text-5xl">Product</h1>
        <h4 className="text-white text-sm md:text-base pt-4">
          We know how large objects will act, We know
        </h4>
        <h4 className="text-white text-sm md:text-base">how our objects will act, We know</h4>
        <h5 className="text-white text-xl font-bold pt-4">
          $16.48
          <button className="bg-[#2DC071] w-44 h-12 text-white text-sm font-bold ml-4 md:ml-8 rounded-md">
            Add to Cart
          </button>
        </h5>
      </div>
      <div className="w-full md:w-2/5 flex justify-center items-center">
        <img src="image/hero2.png" alt="men" className="w-64 md:w-[510px] h-auto pt-10" />
      </div>
    </div>
  );
}
