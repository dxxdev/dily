function filteredCategory(arr) {
  const unique = [];
  for (const obj of arr) {
    if (!unique.some((u) => u?.name == obj.category.name)) {
      unique.push(obj.category);
    }
  }
  return unique;
}

export default filteredCategory;
