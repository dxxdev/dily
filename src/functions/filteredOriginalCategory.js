function filteredOriginalCategory(arr, category) {
  const unique = arr.filter((item) => {
    return item.category.originalCategory == category;
  });
  return unique;
}

export default filteredOriginalCategory;
