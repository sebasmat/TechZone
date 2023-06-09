import React from "react";
import ProductInterface from "@/interfaces/productsInterface";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({
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
    <div className="flex flex-row justify-between rounded-2xl m-7 p-5 bg-violet-400 shadow-2xl shadow-gray-700 hover:bg-violet-500 duration-300">
      <Link href={`detail/${id}`}>
      <Image src={imageCard} alt={name} width={200} height={200} className="bg-white rounded-2xl"/>
      </Link>
      <div className="flex flex-col items-end justify-between">
      <Link href={`detail/${id}`}>
        <h2 className="font-bold">{name}</h2>
        <h2>{category}</h2>
        <h2 className="text-violet-950 font-bold text-2xl">${price}</h2>
        </Link>
        <button className="bg-violet-900 rounded-xl py-1 px-2 text-white hover:bg-violet-700 duration-300 mt-2 ">Agregar al carrito</button>
      </div>
      
    </div>
  );
};

export default ProductCard;
