import React from "react";
import NavItem from "@/layout/nav-item";
import { useUser } from "@auth0/nextjs-auth0/client";

type NavbarProps = {
  pageId: string;
};
const NavBar = ({ pageId }: NavbarProps) => {
  const { user } = useUser();
  return (
    <div className="flex justify-center">
      <nav className="w-full z-0">
        <ul
          className="flex justify-center bg-violet-800 px-3 text-sm font-medium text-white
                 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        >
          <NavItem
            title={"Inicio"}
            url={"/"}
            isSelected={pageId === "homePage"}
          />
          {/*<NavItem*/}
          {/*  title={"Categories"}*/}
          {/*  url={"/categories"}*/}
          {/*  isSelected={pageId === "categoriesPage"}*/}
          {/*/>*/}
          <NavItem
            title={"Productos"}
            url={"/products"}
            isSelected={pageId === "productsPage"}
          />
          <NavItem
            title={"Favoritos"}
            url={"/favorites"}
            isSelected={pageId === "favoritesPage"}
          />
          <NavItem
            title={"Contacto"}
            url={"/info"}
            isSelected={pageId === "infoPage"}
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
