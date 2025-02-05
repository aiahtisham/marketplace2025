import Image from 'next/image';
import React from 'react';

export default function heropicture() {
  return (
    <div>
    <div className="flex items-center justify-center gap-2">

      <div className="relative">
        <Image
          src="/image/grid1.png" 
          alt="Main Image"
          width={700}
          height={530}
          className="rounded-lg "
        />
      </div>

      
        <div className="flex flex-col gap-2">
          <Image
            src="/image/grid2.png" 
            alt="Product 1"
            width={361}
            height={260}
            className="rounded-lg "
          />
        
        
          <Image
            src="/image/grid3.png" 
            alt="Product 2"
            width={361}
            height={260}
            className="rounded-lg "
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Image
            src="/image/grid4.png" 
            alt="Product 3"
            width={361}
            height={260}
            className="rounded-lg "
          />
        
          <Image
            src="/image/grid5.png" 
            alt="Product 4"
            width={361}
            height={260}
            className="rounded-lg "
          />
        </div>
     
    </div>
    </div>
  );
}