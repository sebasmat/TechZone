import React from "react";
import ProductInterface from "@/interfaces/productsInterface";
import Image from "next/image";

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
    <div className="flex max-h-80 w-80">
      <Image src={imageCard} alt={name} width={200} height={200} />
      <div>
        <h2>{name}</h2>
        <h2>{price}</h2>
        <h2>{category}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
