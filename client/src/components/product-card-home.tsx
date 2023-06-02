import React from "react";
import ProductInterface from "@/interfaces/productsInterface";
import Image from "next/image";
import Link from "next/link";

const ProductCardHome = ({
  id,
  category,
  brand,
  name,
  imageDetail,
  imageCard,
  description,
  price,
  available,
  stock,
}: ProductInterface) => {
  return (
    <div className=" bg-neutral-100 flex flex-col justify-around items-center shadow-2xl rounded-xl m-8 py-5 px-5 h-500 hover:bg-violet-400 duration-300">
     <Link href={`detail/${id}`}>
      <Image src={imageCard} alt={name} width={125} height={125} className="p-2 bg-white rounded-xl" />
      
      <div className="flex flex-col justify-between w-80 h-70">
     
        <h2 className="font-bold">{name}</h2>
        
        <h2 className="text-violet-950 font-bold">${price}</h2>
        <h2>{category}</h2>
      </div>
      </Link>
      <button className="bg-violet-900 rounded-xl py-1 px-2 text-white hover:bg-violet-700 duration-300 mt-2">Añadir al carrito</button>
    </div>
  );
};

export default ProductCardHome;
