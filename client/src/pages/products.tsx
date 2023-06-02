import React, { useState } from "react";
import data from "../data.json";
import ProductListing from "@/components/product-listing";
import ProductInterface from "../interfaces/productsInterface";
import { useFilterProducts } from "@/hooks/useFilterProducts";
import FilterProducts from "@/components/filter-products";

export async function getStaticProps() {
  return {
    props: {
      pageId: "productsPage",
    },
  };
}

let arrayProducts = data as ProductInterface[];
const Products = () => {
  const [productsFiltered, setProductsFiltered] =
    useState<ProductInterface[]>(arrayProducts);
  const [search, setSearch] = useState<ProductInterface[]>(arrayProducts);
  return (
    <div className="flex flex-arrow justify-center items-start">
      <FilterProducts
        arrayProducts={arrayProducts}
        productsFiltered={productsFiltered}
        setProductsFiltered={setProductsFiltered}
      />
      <ProductListing arrayProducts={productsFiltered} />
    </div>
  );
};

export default Products;
