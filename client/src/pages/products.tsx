import React, { useEffect, useState } from "react";
import data from "../data.json";
import ProductListing from "@/components/product-listing";
import ProductInterface from "../interfaces/productsInterface";
import Paginated from "@/components/paginated";
import FilterProducts from "@/components/filter-products";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";

export async function getStaticProps() {
  return {
    props: {
      pageId: "productsPage",
    },
  };
}



let arrayProducts = data as ProductInterface[];
const Products = () => {

  const dispatch = useDispatch()
  const result = useTypedSelector((state) => state.products.ProductsFromDb)

  useEffect(() => {
    dispatch(getProducts(1))
  }, [])

  const arrayProducts = result

  const [productsFiltered, setProductsFiltered] =
     useState<ProductInterface[]>(arrayProducts);
   const [search, setSearch] = useState<ProductInterface[]>(arrayProducts);

  

  return (
    <div className="flex flex-arrow items-start">
       <FilterProducts
        arrayProducts={arrayProducts}
        productsFiltered={productsFiltered}
        setProductsFiltered={setProductsFiltered}
      />
      <ProductListing arrayProducts={arrayProducts} />
      <Paginated />
    </div>
  );
};

export default Products;
