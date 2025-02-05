

import Image from "next/image";

const Products = [
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic17.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic16.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic15.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic14.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic13.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic12.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic11.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$16.48",
    image : "/image/pic10.png",
    rating : 4,
  },

];

const ProductBox = ({ product }: { product:unknown}) => {
  const p = product as { 
    title: string; 
    title2: string; 
    price: string; 
    oldPrice: string; 
    image: string; 
    rating: number;
}
return (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <Image src={p.image} width={239} height={427} alt={p.title2} />
    <div className="pt-2 text-center mt-2">
      <h1 className="font-bold text-lg font-mono text-[#252B42]">{p.title}</h1>
      <h2 className="font-bold text-sm text-[#737373] font-mono ">{p.title2}</h2>
      <div className=" space-x-2 text-center">
        <span className="text-[#BDBDBD] font-bold">{p.price}</span>
        {p.oldPrice && (
          <span className="text-[#23856D] font-bold line-through"> {p.oldPrice} </span>
        )}
      </div>
      <div className="flex justify-center space-x-1 text-yellow-400 text-md pt-1">
        <img src="image/product-colors.png" alt="color" className=" h-[16px]" />
      </div>
    </div>
  </div>
);
};

const ProductList = () => (
<main>
  <section>
    <h2 className="text-[#737373] text-[20px] text-center mt-4">Featured Products</h2>
  </section>
  <h3 className="text-[#252B42] text-[24px] text-center font-bold">BestSeller Product</h3>
  <p className="text-[14px] text-center text-[#737373]">
    Problem try to resolve the conflict between
  </p>
  <div className="grid grid-cols-4 gap-1">
    {Products.map((product, index) => (
      <ProductBox key={index} product={product} />
    ))}
  </div>
</main>
);

export default ProductList;

