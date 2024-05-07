function filteredProductByCategory(arr, category) {
  const unique = arr.filter((item) => {
    return item.category.name === category;
  });
  return unique;
}

export default filteredProductByCategory;
