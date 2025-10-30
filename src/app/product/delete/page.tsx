"use client";
import { deleteProductModalType } from "@/app/types/types";
import { deleteProduct } from "@/app/utils/productCrud";
import { IoMdCloseCircle } from "react-icons/io";

const DeleteProductModal = ({
  deleteProductModalIsOpen,
  setdeleteProductModalIsOpen,
  id,
}: deleteProductModalType) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      deleteProduct(id);
      setdeleteProductModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (!deleteProductModalIsOpen) return null;

  return (
    <div
      onClick={() => setdeleteProductModalIsOpen(false)}
      className="bg-black/60 fixed inset-0 w-full h-full backdrop-blur-sm flex justify-center items-center p-4"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg rounded-md flex flex-col p-5 space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Remove Product</h2>
          <button
            type="button"
            onClick={() => setdeleteProductModalIsOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            <IoMdCloseCircle className="text-red-500 text-2xl hover:cursor-pointer text-shadow-2xs" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <h3>Do you whant delete this item ?</h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-start">
          <button
            type="submit"
            className="border px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700 w-full sm:w-auto"
          >
            Delete
          </button>
          <button
            type="button"
            className="border px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 w-full sm:w-auto"
            onClick={() => setdeleteProductModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteProductModal;
