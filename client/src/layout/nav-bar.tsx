import React from "react";
import NavItem from "@/layout/nav-item";

type NavbarProps = {
  pageId: string;
};
const NavBar = ({ pageId }: NavbarProps) => {
  return (
    <div className="flex justify-center h-16">
      <nav className="w-full">
        <ul
          className="flex justify-center bg-white/90 px-3 text-sm font-medium text-zinc-800
                 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        >
          <NavItem
            title={"Home"}
            url={"/"}
            isSelected={pageId === "homePage"}
          />
          {/*<NavItem*/}
          {/*  title={"Categories"}*/}
          {/*  url={"/categories"}*/}
          {/*  isSelected={pageId === "categoriesPage"}*/}
          {/*/>*/}
          <NavItem
            title={"Products"}
            url={"/products"}
            isSelected={pageId === "productsPage"}
          />
          <NavItem
            title={"Favorites"}
            url={"/favorites"}
            isSelected={pageId === "favoritesPage"}
          />
          <NavItem
            title={"More Info"}
            url={"/info"}
            isSelected={pageId === "infoPage"}
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
