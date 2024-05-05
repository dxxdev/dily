const filterProducts = (products, brands, memories) => {
  const filteredProducts = products.filter((product) => {
    if (brands.length > 0) {
      return brands.includes(product.category.brend);
    }
    if (memories.length > 0) {
      const { types } = product.property.find((prop) => prop.name == "Xotira");
      return memories.some((memory) => types.includes(memory));
    }
  });
  return filteredProducts;
};
export default filterProducts;
