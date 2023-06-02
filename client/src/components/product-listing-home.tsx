import React from "react";
import ProductCardHome from './product-card-home';
import ProductInterface from "../interfaces/productsInterface";

type ProductListingProps = {
  arrayProducts: ProductInterface[];
};

const ProductListingHome = ({ arrayProducts }: ProductListingProps) => {
  return (
    <div className="flex justify-center flex-wrap py-10  ">
      {arrayProducts.map((product) => {
        return (
          <ProductCardHome
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

export default ProductListingHome;
