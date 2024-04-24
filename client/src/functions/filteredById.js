const filteredById = (arr, filterType) => {
  let filteredProduct = arr.filter((product) => {
    return product.id == filterType;
  });
  return filteredProduct;
};

export default filteredById;
