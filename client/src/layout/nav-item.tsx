import React from "react";

type NavItemProps = {
  title: string;
  url: string;
  isSelected?: boolean;
};
const NavItem = ({ title, url, isSelected }: NavItemProps) => {
  return (
    <li>
      <a
        className={`block px-3 py-2 transition hover:text-teal-500 ${
          isSelected ? "text-teal-500" : ""
        }`}
        href={url}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
