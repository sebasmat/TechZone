import React from "react";
import data from "../data.json";
import ProductListing from "@/components/product-listing";
import ProductInterface from '../interfaces/productsInterface';

const Products = () => {

  let arrayProducts = data as ProductInterface[];

  return (<div>

    <p>this is products page</p>
    <ProductListing arrayProducts={arrayProducts} />
  </div>
  )
};

export default Products;