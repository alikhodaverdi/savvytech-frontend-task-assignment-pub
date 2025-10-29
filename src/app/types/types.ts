import React, { JSX } from "react";

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  price: number;
  date?: Date;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
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
};

export type deleteProductModalType = {
  deleteProductModalIsOpen: boolean;
  setdeleteProductModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type detailProductModalType = {
  detailProductModalIsOpen: boolean;
  setdetailProductModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
