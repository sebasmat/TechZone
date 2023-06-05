import React from "react";
import ProductCard from "@/components/product-card";
import ProductInterface from "../interfaces/productsInterface";
import { useTypedSelector } from "@/store/useTypeSelector";

type ProductListingProps = {
  arrayProducts: ProductInterface[];
};

const ProductListing = ({ arrayProducts }: ProductListingProps) => {

  const { searchs, loading, error } = useTypedSelector(
    (state) => state.searchs
  );
  return (
    <div className="container ">
      {searchs.length > 0 ? searchs.map((search)=>{
        return(
          <ProductCard
            key={search.id}
            id={search.id}
            category={search.category}
            brand={search.brand}
            name={search.name}
            imageDetail={search.imageDetail}
            imageCard={search.imageCard}
            description={search.description}
            price={search.price}
            available={search.available}
            stock={search.stock}
          />
        )
      })
      :
      arrayProducts.map((product) => {
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
