"use client";

import ReactECharts from "echarts-for-react";
import { products } from "../data/data";

const ProductChart = () => {
  // Made with ai
  const productNames = products.map((p) => p.title);
  const productPrices = products.map((p) => p.price);

  const option = {
    title: {
      text: "Product Prices",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: productNames,
      axisLabel: {
        rotate: 30,
      },
    },
    yAxis: {
      type: "value",
      name: "Price ($)",
    },
    series: [
      {
        data: productPrices,
        type: "bar",
        color: "#1D546C",
        barMaxWidth: 40,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "800px" }} />;
};

export default ProductChart;
