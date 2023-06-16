import React, { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import MainLayout from "@/layout/main-layout";

export async function getStaticProps() {
  return {
    props: {
      pageId: "favoritesPage",
    },
  };
}

const Favorites: NextPageWithLayout = () => {
  return (
    <>
      <div>this is favorites page</div>
    </>
  );
};
Favorites.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Favorites;
