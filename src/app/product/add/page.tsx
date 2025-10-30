"use client";
import { useState } from "react";
import { ProductType, addProductModalType } from "@/app/types/types";
import { createProduct } from "@/app/utils/productCrud";
import { IoMdCloseCircle } from "react-icons/io";

const AddProductModal = ({
  addProductModalIsOpen,
  setaddProductModalIsOpen,
}: addProductModalType) => {
  const [product, setProduct] = useState<Omit<ProductType, "id" | "date">>({
    title: "",
    desc: "",
    price: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: ProductType = {
      id: crypto.randomUUID().slice(0, 8),
      title: product.title,
      desc: product.desc,
      price: product.price,
      date: new Date(),
    };

    try {
      createProduct(newProduct);
      setaddProductModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (!addProductModalIsOpen) return null;

  return (
    <div
      onClick={() => setaddProductModalIsOpen(false)}
      className="bg-black/60 fixed inset-0 w-full h-full backdrop-blur-sm flex justify-center items-center p-4"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg rounded-md flex flex-col p-5 space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Add Product</h2>
          <button
            type="button"
            onClick={() => setaddProductModalIsOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            <IoMdCloseCircle className="text-red-500 text-2xl hover:cursor-pointer text-shadow-2xs" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Product Title"
            className="border rounded-sm p-2 w-full"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="border rounded-sm p-2 w-full"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="border rounded-sm p-2 w-full"
            value={product.desc}
            onChange={(e) => setProduct({ ...product, desc: e.target.value })}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-start">
          <button
            type="submit"
            className="border px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 w-full sm:w-auto"
          >
            Submit
          </button>
          <button
            type="button"
            className="border px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 w-full sm:w-auto"
            onClick={() => setaddProductModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
