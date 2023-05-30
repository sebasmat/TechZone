import React from "react";

export async function getStaticProps() {
  return {
    props: {
      pageId: "infoPage",
    },
  };
}

const Info = () => {
  return <div>this is info page</div>;
};

export default Info;
