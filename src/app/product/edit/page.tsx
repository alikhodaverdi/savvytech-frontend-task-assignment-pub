"use client";
import { editProductModalType, ProductType } from "@/app/types/types";
import { updateProduct } from "@/app/utils/productCrud";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const EditProductModal = ({
  editProductModalIsOpen,
  seteditProductModalIsOpen,
  id,
  product,
}: editProductModalType) => {
  const [productUpdate, setProductUpdate] = useState<ProductType | null>(
    product
  );

  if (!editProductModalIsOpen || !productUpdate) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData: Partial<ProductType> = {
      title: productUpdate.title,
      desc: productUpdate.desc,
      price: productUpdate.price,
      date: new Date(),
    };
    try {
      if (id) {
        updateProduct(id, updatedData);
      }
      seteditProductModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (!editProductModalIsOpen) return null;

  return (
    <div
      onClick={() => seteditProductModalIsOpen(false)}
      className="bg-black/60 fixed inset-0 w-full h-full backdrop-blur-sm flex justify-center items-center p-4"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg rounded-md flex flex-col p-5 space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Update Product</h2>
          <button
            type="button"
            onClick={() => seteditProductModalIsOpen(false)}
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
            value={productUpdate?.title}
            onChange={(e) =>
              setProductUpdate({ ...productUpdate, title: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="border rounded-sm p-2 w-full"
            value={productUpdate?.price}
            onChange={(e) =>
              setProductUpdate({
                ...productUpdate,
                price: Number(e.target.value),
              })
            }
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="border rounded-sm p-2 w-full"
            value={productUpdate?.desc}
            onChange={(e) =>
              setProductUpdate({ ...productUpdate, desc: e.target.value })
            }
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
            onClick={() => seteditProductModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
