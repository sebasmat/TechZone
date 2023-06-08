import React from "react";
import ProductInterface from "@/interfaces/productsInterface";
import Image from "next/image";
import Link from "next/link";

const ProductCardHome = ({
  id,
  category,
  brand,
  name,
  images,
  description,
  price,
  available,
  stock,
}: ProductInterface) => {
  return (
    <div className=" flex flex-col justify-around items-center bg-violet-400 shadow-2xl shadow-gray-700 rounded-xl m-8 py-5 px-5 h-500 hover:bg-violet-500 hover:scale-110 duration-300">
      <Link href={`detail/${id}`}>
        <div className="flex flex-col items-center p-2 rounded-xl" >
          <Image className="bg-white rounded-xl" src={images[1]} alt={name} width={125} height={125} />
        </div>
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
