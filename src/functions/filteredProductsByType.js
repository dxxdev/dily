const filteredProductsByType = (arr, filterType) => {
  if (filterType.length > 0) {
    const filteredArr = arr.filter((product) => {
      return filterType.includes(product.category.brend);
    });

    return filteredArr;
  } else {
    return arr;
  }
};

export default filteredProductsByType;
