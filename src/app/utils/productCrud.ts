import { products } from "../data/data";
import { ProductType } from "../types/types";

// Create a new product and return updated arry
export function createProduct(newProduct: ProductType): void {
  products.push({ ...newProduct, date: new Date() });
}

// Return product by id
export function getProductById(id: string): ProductType | undefined {
  return products.find((p) => p.id === id);
}

// update product by id and return updated array
export function updateProduct(
  id: string | null,
  updatedData: Partial<ProductType> // No needs all fields for
): void {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedData, date: new Date() };
  }
}

// Delete product by id and return updated array
export function deleteProduct(id: string | null): void {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
}
