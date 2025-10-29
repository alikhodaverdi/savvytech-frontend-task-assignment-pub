"use client";
import { useState } from "react";
import { ProductType, addProductModalType } from "@/app/types/types";

const AddProductModal = ({
  addProductModalIsOpen,
  setaddProductModalIsOpen,
}: addProductModalType) => {
  const [product, setProduct] = useState<Omit<ProductType, "id" | "date">>({
    title: "",
    desc: "",
    price: 0,
    options: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: ProductType = {
      id: crypto.randomUUID(),
      title: product.title,
      desc: product.desc,
      price: product.price,
      date: new Date(),
      options: product.options,
    };

    console.log(newProduct);

    setaddProductModalIsOpen(false);
  };

  if (!addProductModalIsOpen) return null;

  return (
    <div
      onClick={() => setaddProductModalIsOpen(false)}
      className="bg-black/60 fixed inset-0 w-full h-full backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white min-w-[50%] min-h-[40%] rounded-md flex flex-col p-3 space-y-3"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Add Product</h2>
          <button type="button" onClick={() => setaddProductModalIsOpen(false)}>
            Close
          </button>
        </div>

        <hr />

        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Product Title"
            className="border rounded-sm p-2"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Price"
            className="border rounded-sm p-2"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            required
          />

          <input
            type="text"
            placeholder="Description"
            className="border rounded-sm p-2"
            value={product.desc}
            onChange={(e) => setProduct({ ...product, desc: e.target.value })}
          />
        </div>

        <hr />

        <div className="flex gap-2">
          <button type="submit" className="border px-3 py-1 rounded">
            Submit
          </button>
          <button
            type="button"
            className="border px-3 py-1 rounded"
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
