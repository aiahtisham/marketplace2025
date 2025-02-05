import React from "react";

export default function listing(){
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <img 
          src="image/pic0.png" 
          alt="men" 
          className="w-full md:w-[510px] h-auto object-cover"
        />
        <img 
          src="image/pic1.png" 
          alt="women" 
          className="w-full md:w-[240px] h-auto object-cover"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <img 
          src="image/pic3.png" 
          alt="men" 
          className="w-full sm:w-[240px] h-auto object-cover"
        />
        <img 
          src="image/pic4.png" 
          alt="women" 
          className="w-full sm:w-[240px] h-auto object-cover"
        />
      </div>
    </div>
  )
}