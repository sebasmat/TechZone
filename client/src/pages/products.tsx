import React from "react";

export async function getStaticProps() {
  return {
    props: {
      pageId: "products",
    },
  };
}

const Products = () => {
  return <div>this is products page</div>;
};

export default Products;