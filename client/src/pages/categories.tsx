import React from "react";

export async function getStaticProps() {
  return {
    props: {
      pageId: "categoriesPage",
    },
  };
}

const Categories = () => {
  return <div>this is categories page</div>;
};

export default Categories;