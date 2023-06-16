import React from "react";
import Link from "next/link";

type NavItemProps = {
  title: string;
  url: string;
  isSelected?: boolean;
};
const NavItem = ({ title, url, isSelected }: NavItemProps) => {
  return (
    <li>
      <Link
        className={`block px-3 py-2 transition hover:bg-white ${
          isSelected
            ? "bg-white text-violet-900 font-bold"
            : "hover:text-violet-900 hover:font-bold"
        }`}
        href={url}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
