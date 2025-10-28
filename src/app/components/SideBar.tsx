"use client";
import { SidebarItmeType, sidebBarProps } from "../types/types";
import Link from "next/link";
import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";

const sideBarItems: SidebarItmeType[] = [
  {
    id: "1",
    label: "Products",
    icon: undefined,
    path: "/product",
  },
];

const SideBar = ({ isMEnuOpen, setisMenuOpen }: sidebBarProps) => {
  const handleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };
  return (
    <ul className="gap-1 grid p-1 ">
      <li className=" py-2  px-1 border-b flex justify-around items-center">
        {!isMEnuOpen && (
          <Link href={"/"}>
            <div>Dashboard</div>
          </Link>
        )}

        <div className="hover:cursor-pointer" onClick={handleMenu}>
          <CiMenuBurger />
        </div>
      </li>

      {sideBarItems.map((item, index) => (
        <li
          key={index}
          className="bg-amber-200 hover:cursor-pointer py-2 rounded-md px-1 border "
        >
          <Link className="flex justify-around items-center" href={item.path}>
            {!isMEnuOpen && <div>{item.label}</div>}
            <div>
              <AiFillProduct />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
