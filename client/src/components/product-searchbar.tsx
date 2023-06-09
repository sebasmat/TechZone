import React from "react";
import { useState } from "react";
import ProductInterface from "../interfaces/productsInterface";
import { getSearchs } from "@/store/actionCreators/getSearch";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

type Props = {
  arrayProducts: ProductInterface[];
};

const Searchbar = ({ arrayProducts }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [search, SetSearch] = useState("");
  // let result: ProductInterface[] = [];
  // const searchByName = (name: string) => {
  //   arrayProducts.forEach((product) => {
  //     if (product.name === name) {
  //       alert(`El producto ${product.name} si se encuentra disponible`);
  //     }
  //   });
  // };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    SetSearch(value);
  };
  const handleClick = async () => {
    router.push("/products");
    // arrayProducts.forEach((product) => {
    //   if (product.name === search || product.name.includes(search)) {
    //     result.push(product);
    //   }
    // });
    await dispatch(getSearchs(search)); // result debe ser un string no un array
  };
  return (
    <div className="grow mx-4 flex">
      <input
        type="search"
        className="w-full rounded-full px-4 py-2 text-sm placeholder:text-zinc-400 border
           focus:outline-none focus:border-teal-500"
        placeholder="Search"
        onChange={handleChange}
      />
      <svg
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="pl-2 w-11 h-11 stroke-2 cursor-pointer "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 
                0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};
export default Searchbar;
