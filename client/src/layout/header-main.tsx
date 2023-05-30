import React from "react";

const HeaderMain = () => {
  return (
    <div
      className="flex justify-between items-center px-8 py-4
     shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
    >
      <div>Brand Logo</div>
      <div className="grow mx-4">
        <input
          type="search"
          className="w-full rounded-full px-4 py-2 text-sm placeholder:text-zinc-400 border
           focus:outline-none focus:border-teal-500"
          placeholder="Search"
        />
      </div>
      <div>ShoppingCart</div>
    </div>
  );
};

export default HeaderMain;
