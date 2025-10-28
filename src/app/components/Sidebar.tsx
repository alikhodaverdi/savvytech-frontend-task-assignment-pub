import React, { JSX } from "react";
import { SidebarItmeType } from "../types/types";

const sideBarItems: SidebarItmeType[] = [
  {
    id: "1",
    label: "Dashboard",
    icon: undefined,
    path: "/",
  },
  {
    id: "2",
    label: "Products",
    icon: undefined,
    path: "/",
  },
];
const Sidebar = () => {
  return <div>sidebar</div>;
};

export default Sidebar;
