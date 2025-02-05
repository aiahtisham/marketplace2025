import React from "react"

export default function hero(){
  return(
    <div>
      <section 
        className="min-h-[500px] md:h-[760px] flex items-center bg-cover bg-center w-full"
        style={{ 
          backgroundImage: 'url(/image/bg3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="ml-4 sm:ml-20 md:ml-40 text-white">
            <h5 className="text-[14px] md:text-[16px] text-white font-bold mb-2 md:mb-4">SUMMER 2020</h5>
            <h1 className="text-[40px] sm:text-[48px] md:text-[58px] text-white font-bold mb-2 md:mb-4">NEW COLLECTION</h1>
            <h4 className="text-[16px] md:text-[20px] text-white">We know how large objects will act,</h4> 
            <h4 className="text-[16px] md:text-[20px] text-white font-bold mb-6 md:mb-10">but things on a small scale.</h4>  
            
            <button className="bg-[#2DC071] w-[180px] md:w-[221px] h-[52px] md:h-[62px] text-white rounded-lg text-[20px] md:text-[24px] font-bold hover:bg-green-600 transition-colors">
              <h3>SHOP NOW</h3>
            </button>
          </div>
        </div>
      </section>

      <div className="px-4">
        <h1 className="font-bold text-center mt-8 md:mt-10 text-[20px] md:text-[24px]">
          EDITORS PICK
        </h1>
        <p className="text-[14px] text-center mt-2">
          Problem try to resolve the conflict between
        </p>
      </div>
    </div>
  )
}