"use client";
import React, { useState } from "react";
import { products } from "../data/data";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductModal from "./add/page";

const ProducsPage = () => {
  // states for handels modals
  const [addProductModalIsOpen, setaddProductModalIsOpen] = useState(false);

  const handleEdit = (id: number) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete product:", id);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Products</h2>
        <div>
          <button
            onClick={() => setaddProductModalIsOpen((prev) => !prev)}
            className="hover:cursor-pointer"
          >
            add product
          </button>
        </div>
      </div>
      <hr />

      <div>
        <table className="w-full text-left border-collapse bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-3">{product.id}</td>
                <td className="p-3">{product.title}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3 flex gap-3">
                  <FaEdit
                    // onClick={() => handleEdit(product.id)}
                    className="cursor-pointer hover:text-blue-600"
                  />
                  <FaTrash
                    // onClick={() => handleDelete(product.id)}
                    className="cursor-pointer hover:text-red-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {addProductModalIsOpen && (
        <AddProductModal
          addProductModalIsOpen={addProductModalIsOpen}
          setaddProductModalIsOpen={setaddProductModalIsOpen}
        />
      )}
    </div>
  );
};

export default ProducsPage;
