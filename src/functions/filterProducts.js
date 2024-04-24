const filterProducts = (products, brands, memories) => {
  const filteredProducts = [];
  products.forEach((product) => {
    if (brands.includes(product.category.brend)) {
      filteredProducts.push(product);
    }
    const { types } = product.property.find((prop) => prop.name == "Xotira");
    if (memories.some((memory) => types.includes(memory))) {
      filteredProducts.push(product);
    }
  });
  return filteredProducts;
};
export default filterProducts;
