import React from "react";
import { NextPage } from "next";

export async function getStaticProps() {
  return {
    props: {
      pageId: "favoritesPage",
    },
  };
}

const Favorites: NextPage = () => {
  return <div>this is favorites page</div>;
};

export default Favorites;
