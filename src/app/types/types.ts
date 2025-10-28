import { JSX } from "react";

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  date: Date;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

export type SidebarItmeType = {
  id: string;
  label: string;
  icon?: JSX.Element;
  path?: string;
};
