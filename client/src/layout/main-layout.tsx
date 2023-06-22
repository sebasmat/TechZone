import React, { useEffect } from "react";
import NavBar from "@/layout/nav-bar";
import HeaderMain from "@/layout/header-main";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useRouter } from "next/router";

const MainLayout = ({ children }: any) => {
  const router = useRouter();

  const { UserFromDb } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (UserFromDb.email !== null || true) {
      if (UserFromDb.available === false) {
        console.log("entro en el user false");
        router.push("/userbloqued");
      }
    }
  }, [UserFromDb]);
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
