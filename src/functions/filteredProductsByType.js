const filteredProductsByType = (arr, filterType) => {
  const filteredArr = arr.filter((product) => {
    return filterType.every((brend) => product.category.brend == brend);
  });

  return filteredArr;
};

export default filteredProductsByType;
