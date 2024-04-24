const filterProducts = (products, brands, memories) => {
  const filteredProducts = [];
  if (brands.length > 0 || memories.length > 0) {
    products.forEach((product) => {
      if (brands.includes(product.category.brend)) {
        filteredProducts.push(product);
      }
      const { types } = product.property.find((prop) => prop.name == "Xotira");
      if (memories.some((memory) => types.includes(memory))) {
        filteredProducts.push(product);
      }
    });
  } else {
    return products;
  }
  return filteredProducts;
};
export default filterProducts;
