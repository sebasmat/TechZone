import React, { useEffect } from "react";
import NavBar from "@/layout/nav-bar";
import HeaderMain from "@/layout/header-main";
import { useTypedSelector } from "@/store/useTypeSelector";

const MainLayout = ({ children }: any) => {
  const { UserFromDb } = useTypedSelector((state) => state.user);
  useEffect(() => {});
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
