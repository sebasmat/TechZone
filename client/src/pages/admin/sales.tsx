import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AdminLayout from "@/layout/admin-layout";
import Products from "@/pages/admin/products";
import axios from "axios";

const Sales: NextPageWithLayout = () => {
  // axios get function to all sales "http://localhost:3001/sales"
  // axios.get("http://localhost:3001/sales");
  const handleGetSales = async () => {
    try {
      const response = await axios.get("http://localhost:3001/sales");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetSales();
  }, []);
  return <div>Estas en sales</div>;
};
Sales.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Sales;
