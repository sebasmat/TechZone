import React from "react";
import ProductCard from "@/components/product-card";
import ProductInterface from "../interfaces/productsInterface";

type ProductListingProps = {
  arrayProducts: ProductInterface[];
};

const ProductListing = ({ arrayProducts }: ProductListingProps) => {
  return (
    <div className="container ">
      {arrayProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            brand={product.brand}
            name={product.name}
            imageDetail={product.imageDetail}
            imageCard={product.imageCard}
            description={product.description}
            price={product.price}
            available={product.available}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
};

export default ProductListing;
