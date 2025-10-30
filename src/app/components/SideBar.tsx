"use client";
import { SidebarItmeType, sidebBarProps } from "../types/types";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { FaWarehouse } from "react-icons/fa";

const sideBarItems: SidebarItmeType[] = [
  {
    id: "1",
    label: "Products",
    icon: <AiFillProduct />,
    path: "/product",
  },
  {
    id: "2",
    label: "Warehouse",
    icon: <FaWarehouse />,
    path: "/",
  },
];

const SideBar = ({ isMEnuOpen, setisMenuOpen }: sidebBarProps) => {
  const handleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };
  return (
    <ul className="gap-1 grid p-1 ">
      <li className=" py-2 text-[#F4F4F4]  px-1 border-b flex justify-around items-center">
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
          className="hover:bg-[#F4F4F4] text-[#F4F4F4] hover:text-[#1A3D64] cursor-pointer py-2 rounded-md px-2 border hover:border-gray-300 transition-colors duration-200"
        >
          <Link
            className={`flex ${
              isMEnuOpen ? "justify-center" : "justify-between"
            } justify-between items-center w-full`}
            href={item.path}
          >
            {!isMEnuOpen && <span>{item.label}</span>}
            <div>{item.icon}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
