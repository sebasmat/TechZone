import React from "react";
import ProductInterface from "@/interfaces/productsInterface";

const ProductCard = ({ id, category, brand, name, imageDetail, imageCard, description, price, available, stock }: ProductInterface) => {
  return (
    <div className="flex">
      <img src={imageCard} />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{category}</h2>
    </div>
  );
};

export default ProductCard;
