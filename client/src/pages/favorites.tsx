import React from "react";

export async function getStaticProps() {
  return {
    props: {
      pageId: "favoritesPage",
    },
  };
}

const Favorites = () => {
  return <div>this is favorites page</div>;
};

export default Favorites;