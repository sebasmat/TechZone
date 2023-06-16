import React from "react";
import NavBar from "@/layout/nav-bar";
import HeaderMain from "@/layout/header-main";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <HeaderMain />
      {children.props?.pageId !== undefined ? (
        <NavBar pageId={children.props?.pageId} />
      ) : (
        <NavBar pageId={""} />
      )}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
