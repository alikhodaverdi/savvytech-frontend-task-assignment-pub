import {
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} from "@/app/utils/productCrud";
import { products } from "../data/data";
import { ProductType } from "../types/types";

// mock  data
const initialProducts: ProductType[] = [
  { id: "1", title: "Product 1", price: 10, date: new Date() },
  { id: "2", title: "Product 2", price: 20, date: new Date() },
];

// create product test
describe("Product CRUD functions", () => {
  beforeEach(() => {
    products.length = 0;
    initialProducts.forEach((p) => products.push({ ...p }));
  });

  test("createProduct adds a new product", () => {
    const newProduct: ProductType = {
      id: "3",
      title: "Product 3",
      price: 30,
      date: new Date(),
    };
    createProduct(newProduct);

    expect(products.length).toBe(3);
    expect(products[2].title).toBe("Product 3");
    expect(products[2].date).toBeInstanceOf(Date);
  });

  //   get product by id test

  test("getProductById  returns the correct porduct", () => {
    const product = getProductById("1");
    expect(product).toBeDefined();
    expect(product?.title).toBe("Product 1");
  });

  //   check get product id returns undefiend for non-existing id

  test("getProductId returns undefined for non-existing id", () => {
    const porduct = getProductById("899");
    expect(porduct).toBeUndefined();
  });

  //   test update product data

  test("updateProduct updates the product", () => {
    const now = new Date();

    updateProduct("1", {
      title: "Updated product 1",
      price: 33,
      date: now,
    });

    const updated = getProductById("1");
    expect(updated?.title).toBe("Updated product 1");
    expect(updated?.price).toBe(33);
    expect(updated?.date?.getTime()).toBe(now.getTime());
  });

  //  test delete product
  test("deleteProduct does nothing for invalid id", () => {
    deleteProduct("852");
    expect(products.length).toBe(2);
  });
});
