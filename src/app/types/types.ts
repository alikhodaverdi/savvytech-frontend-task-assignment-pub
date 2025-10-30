import React, { JSX } from "react";

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  price: number;
  date: Date;
};

export type SidebarItmeType = {
  id: string;
  label: string;
  icon?: JSX.Element;
  path: string;
};

// sidebar modal types
export type sidebBarProps = {
  isMEnuOpen: boolean;
  setisMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// product modals types
export type addProductModalType = {
  addProductModalIsOpen: boolean;
  setaddProductModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type editProductModalType = {
  editProductModalIsOpen: boolean;
  seteditProductModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string | null;
  product: ProductType | null;
};

export type deleteProductModalType = {
  deleteProductModalIsOpen: boolean;
  setdeleteProductModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string | null;
};
export type detailProductModalType = {
  detailProductModalIsOpen: boolean;
  setdetailProductModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductType | null;
};
