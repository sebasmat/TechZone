import ProductFormUpdate from "@/components/product-form-update";
import { NextPageWithLayout } from "@/pages/_app";
import React, { ReactElement } from "react";
import MainLayout from "@/layout/main-layout";

const UpdateProduct: NextPageWithLayout = () => {
  return (
    <div className="flex flex-row justify-center items-center mx-auto py-10 w-2/4">
      <ProductFormUpdate />
    </div>
  );
};
UpdateProduct.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default UpdateProduct;
