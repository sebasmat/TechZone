import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AdminLayout from "@/layout/admin-layout";
import axios from "axios";
import Image from "next/image";

const Sales: NextPageWithLayout = () => {
  const [localSales, setLocalSales] = useState([]);
  const handleGetSales = async () => {
    try {
      const { data } = await axios.get(
        "https://tech-zone-api-n786.onrender.com/sales"
      );
      console.log(data);
      setLocalSales(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetSales();
  }, []);

  return (
    <div className="px-16 py-10 mx-auto">
      {localSales.map((sale: any, index) => (
        <div
          key={index}
          className="tz-card tz-card-side bg-base-100 shadow-xl my-2 tz-card-bordered"
        >
          <figure
            style={{
              minHeight: "200px",
              minWidth: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
            }}
          >
            <Image
              width={200}
              height={200}
              src={sale.User.profileIMG}
              alt="Movie"
              style={{
                minHeight: "150px",
                minWidth: "150px",
                maxWidth: "150px",
                maxHeight: "150px",
              }}
            />
          </figure>
          <div className="tz-card-body">
            <h2 className="tz-card-title">Usuario: {sale.User.name}</h2>
            <h3 className="text-xl font-bold">Productos</h3>
            {sale.Products.map((product: any) => (
              <>
                <div className="">
                  <p className="font-bold">
                    {product.name}{" "}
                    <span className="tz-badge tz-badge-outline tz-badge-secondary">
                      Precio: {product.price}
                    </span>
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
Sales.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Sales;
