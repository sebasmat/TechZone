import React, { useState } from "react";
import Link from "next/link";
import Searchbar from "@/components/product-searchbar";
import ProductInterface from "@/interfaces/productsInterface";
import data from "../data.json";
import LoginLogout from "@/components/LoginLogout";

const HeaderMain = () => {

  let arrayProducts = data as ProductInterface[];
  return (
    <div
      className="flex content-center justify-between items-center px-8 py-4 bg-violet-900"
    >
      <img src="https://i.ibb.co/R6yKw82/7.png" 
      className="pb-1 w-17 h-14"/>
      <Searchbar 
        arrayProducts={arrayProducts}
      />
      <div>
        <Link href={"/shopping"}>
          <button>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1 icon icon-tabler icon-tabler-shopping-cart"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </div>
          </button>
        </Link>
      </div>
      <LoginLogout/>
    </div>
  );
};

export default HeaderMain;
