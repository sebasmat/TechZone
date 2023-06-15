import React, { ReactElement, useEffect, useState } from "react";
import ProductListing from "@/components/product-listing";
import ProductInterface from "../interfaces/productsInterface";
import Paginated from "@/components/paginated";
import FilterProducts from "@/components/filter-products";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";
import { NextPageWithLayout } from "@/pages/_app";
import MainLayout from "@/layout/main-layout";

export async function getStaticProps() {
  return {
    props: {
      pageId: "productsPage",
    },
  };
}

const Products: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const result = useTypedSelector((state) => state.products.ProductsFromDb);

  useEffect(() => {
    dispatch(getProducts(0));
  }, []);

  const arrayProducts = result;

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
      <div className="w-[100%] pb-6">
        <ProductListing arrayProducts={arrayProducts} />
        <Paginated />
      </div>
    </div>
  );
};
Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Products;
