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
        className={`block px-3 py-2 transition hover:text-teal-500 ${
          isSelected ? "text-teal-500" : ""
        }`}
        href={url}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
