import React from "react";
import Searchbar from "../components/product-searchbar";

const HeaderMain = () => {
  return (
    <div
      className="flex content-center justify-between items-center px-8 py-4
     shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
    >
      <div>Brand Logo</div>
      <Searchbar /> 
      <div>ShoppingCart</div>
      <div className= "m-5">Profile</div>
    </div>
  );
};

export default HeaderMain;
