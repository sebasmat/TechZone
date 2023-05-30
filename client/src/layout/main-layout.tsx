import React from "react";
import NavBar from "@/layout/nav-bar";
import HeaderMain from "@/layout/header-main";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <HeaderMain />
      <NavBar pageId={children.props.pageId} />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
