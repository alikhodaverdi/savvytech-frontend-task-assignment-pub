"use client";
import { IoMdCloseCircle } from "react-icons/io";
import { detailProductModalType } from "@/app/types/types";

const DetailProductModal = ({
  detailProductModalIsOpen,
  setdetailProductModalIsOpen,
  product,
}: detailProductModalType) => {
  if (!detailProductModalIsOpen || !product) return null;

  return (
    <div
      onClick={() => setdetailProductModalIsOpen(false)}
      className="bg-black/60 fixed inset-0 w-full h-full backdrop-blur-sm flex justify-center items-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg rounded-md flex flex-col p-5 space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Detail Product</h2>
          <button
            type="button"
            onClick={() => setdetailProductModalIsOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            <IoMdCloseCircle className="text-red-500 text-2xl hover:cursor-pointer text-shadow-2xs" />
          </button>
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-semibold">Title</td>
              <td className="p-2">{product.title}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Price</td>
              <td className="p-2">${product.price}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Description</td>
              <td className="p-2">{product.desc || "-"}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Date</td>
              <td className="p-2">
                {product.date
                  ? new Date(product.date)
                      .toISOString()
                      .replace("T", " ")
                      .slice(0, 19)
                  : "-"}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="border px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setdetailProductModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProductModal;
