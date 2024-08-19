import { products } from "../data/data";

const searchingProducts = (searching) => {
  return products.filter((product) => {
    return product.productName
      .trim()
      .toLocaleLowerCase()
      .includes(searching.trim().toLowerCase());
  });
};

export default searchingProducts;
