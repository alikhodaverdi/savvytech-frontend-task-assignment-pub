import { ProductType } from "../types/types";

// Create a new product and return updated arry
export function createProduct(
  products: ProductType[],
  newProduct: ProductType
): ProductType[] {
  return [...products, newProduct];
}

// Return product by id
export function getProductById(
  products: ProductType[],
  id: string
): ProductType | undefined {
  return products.find((p) => p.id === id);
}

// update product by id and return updated array
export function updateProduct(
  products: ProductType[],
  id: string,
  updatedData: Partial<ProductType> // No needs all fields for
): ProductType[] {
  return products.map((item) =>
    item.id === id ? { ...item, ...updatedData, date: new Date() } : item
  );
}

// Delete product by id and return updated array
export function deleteProduct(
  products: ProductType[],
  id: string
): ProductType[] {
  return products.filter((product) => product.id !== id);
}
