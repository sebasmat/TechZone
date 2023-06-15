import React, { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import MainLayout from "@/layout/main-layout";

export async function getStaticProps() {
  return {
    props: {
      pageId: "infoPage",
    },
  };
}

const Info: NextPageWithLayout = () => {
  return <div>this is info page</div>;
};
Info.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Info;
