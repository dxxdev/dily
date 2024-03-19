function filteredCategory(arr) {
  const unique = [];
  for (const obj of arr) {
    if (
      !unique.some((u) => u?.originalCategory == obj.category.originalCategory)
    ) {
      unique.push(obj.category);
    }
  }
  return unique;
}

export default filteredCategory;
