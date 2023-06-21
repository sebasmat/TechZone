import React from "react";
import ProductCardHome from "./product-card-home";
import ProductInterface from "../interfaces/productsInterface";
import { useTypedSelector } from "@/store/useTypeSelector";

type ProductListingProps = {
  arrayProducts: ProductInterface[];
};

const ProductListingHome = ({ arrayProducts }: ProductListingProps) => {
  const { ProductsFromDb: productsHome } = useTypedSelector(
    (state) => state.products
  );
  return (
    <div className="flex justify-center flex-wrap">
      {arrayProducts.map((product) => {
        return (
          <ProductCardHome
            key={product.name}
            id={product.id}
            category={product.category}
            brand={product.brand}
            name={product.name}
            images={product.images}
            description={product.description}
            price={product.price}
            avalaible={product.avalaible}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
};

export default ProductListingHome;
