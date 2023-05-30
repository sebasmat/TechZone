import React from "react";
import ProductCard from "@/components/product-card";

const ProductListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductListing;
