import React from "react";
import ProductCard from "@/components/product-card";
import ProductInterface from "../interfaces/productsInterface";
import { useRouter } from "next/router";

type ProductListingProps = {
  arrayProducts: ProductInterface[];
};

const ProductListing = ({ arrayProducts }: ProductListingProps) => {

  const router = useRouter()
  const path = router.asPath

  if (arrayProducts.length < 1) {
    return (
      <div className="container flex flex-col items-center pt-10 text-slate-600 text-4xl">
        {path != "/profilePage" ?
          <h3 className="font-bold p-5">
            Tu búsqueda no se relaciona con ningún producto
          </h3> :
          <h3 className="font-bold p-5">
            No has realizado compras
          </h3>
        }
        <div className="flex max-w-[300px] pb-10">{
          path != "/profilePage" ?
          <img src="https://i.ibb.co/v3PW0mb/robot-con-engranaje-violet-400.png" /> :
          <img src="https://i.ibb.co/KKg0kqb/bolsa-vacia-1.png" />
          }
        </div>
        { path != "/profilePage" ?
        <h3 className="text-violet-400 pl-7">Error 404</h3>:
        ""}
      </div>
    );
  }
  return (
    <div className="container ">
      {arrayProducts
        .filter((product) => product.avalaible)
        .filter((product) => product.stock > 0)
        .map((product) => {
          return (
            <ProductCard
              key={product.id}
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

export default ProductListing;