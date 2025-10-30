"use client";
import { useState } from "react";
import { products } from "../data/data";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import AddProductModal from "./add/page";
import DeleteProductModal from "./delete/page";
import EditProductModal from "./edit/page";
import { ProductType } from "../types/types";
import DetailProductModal from "./[slug]/page";

const ProducsPage = () => {
  // states for handels modals
  const [product, setProduct] = useState<ProductType | null>(null);
  const [addProductModalIsOpen, setaddProductModalIsOpen] = useState(false);
  const [deleteProductModalIsOpen, setdeleteProductModalIsOpen] =
    useState(false);
  const [editProductModalIsOpen, setEditProductModalIsOpen] = useState(false);
  const [detailProductModalIsOpen, setdetailProductModalIsOpen] =
    useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Products</h2>
        <div>
          <button
            onClick={() => setaddProductModalIsOpen((prev) => !prev)}
            className="hover:cursor-pointer border px-2 rounded-md border-[#1D546C] bg-[#1D546C] hover:bg-[#F4F4F4] hover:text-[#1D546C] text-[#F4F4F4]"
          >
            Add Product
          </button>
        </div>
      </div>
      <hr />

      <div className=" py-2">
        <table className="w-full text-left bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#1D546C] text-[#F4F4F4]">
            <tr>
              <th className="p-3">R</th>
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3">{product.title}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">
                  {product.date
                    ? new Date(product.date)
                        .toISOString()
                        .replace("T", " ")
                        .slice(0, 19)
                    : "-"}
                </td>
                <td className="p-3 flex gap-3">
                  <FaEdit
                    onClick={() => {
                      setProduct(product);
                      setEditProductModalIsOpen(true);
                    }}
                    className="cursor-pointer text-[#1D546C] hover:text-blue-600 transition-colors"
                  />
                  <FaTrash
                    onClick={() => {
                      setProduct(product);
                      setdeleteProductModalIsOpen(true);
                    }}
                    className="cursor-pointer text-[#1D546C] hover:text-red-600 transition-colors"
                  />
                  <FaEye
                    onClick={() => {
                      setProduct(product);
                      setdetailProductModalIsOpen(true);
                    }}
                    className="cursor-pointer text-[#1D546C] hover:text-sky-600 transition-colors"
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
      {deleteProductModalIsOpen && (
        <DeleteProductModal
          deleteProductModalIsOpen={deleteProductModalIsOpen}
          setdeleteProductModalIsOpen={setdeleteProductModalIsOpen}
          id={product?.id || null}
        />
      )}
      {editProductModalIsOpen && (
        <EditProductModal
          editProductModalIsOpen={editProductModalIsOpen}
          seteditProductModalIsOpen={setEditProductModalIsOpen}
          id={product?.id || null}
          product={product}
        />
      )}

      {detailProductModalIsOpen && (
        <DetailProductModal
          detailProductModalIsOpen={detailProductModalIsOpen}
          setdetailProductModalIsOpen={setdetailProductModalIsOpen}
          product={product}
        />
      )}
    </div>
  );
};

export default ProducsPage;
