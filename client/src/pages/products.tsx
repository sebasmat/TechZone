import React, { ReactElement, useEffect, useState } from "react";
import ProductListing from "@/components/product-listing";
import ProductInterface from "../interfaces/productsInterface";
import Paginated from "@/components/paginated";
import FilterProducts from "@/components/filter-products";
import { useRouter } from "next/router";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";
import { NextPageWithLayout } from "@/pages/_app";
import MainLayout from "@/layout/main-layout";
import style from "../styles/loader.module.css"

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
    setLoading(true)
    dispatch(getProducts(0,null,null));
    setLoading(false)
  }, []);

  const arrayProducts = result;
  const [loading, setLoading] = useState(false);
    useState<ProductInterface[]>(arrayProducts);
  const [search, setSearch] = useState<ProductInterface[]>(arrayProducts);

  return (
    <div> 
      {loading ? (
        <div className={style.loadercontainer}>
      	  <div className={style.spinner}></div>
        </div>
      ) : (
    <div className="flex flex-arrow items-start">
      <FilterProducts/>
      <div className="w-[100%] pb-6">
        <ProductListing arrayProducts={arrayProducts} />
        <Paginated />
      </div>
    </div>
      )}
    </div>
  );
};
Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Products;
