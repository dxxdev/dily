function filteredCategoryMenuItems(arr) {
  const unique = [];
  for (const obj of arr) {
    if (!unique.some((u) => u?.name == obj?.name)) {
      unique.push(obj);
    }
  }
  return unique;
}

export default filteredCategoryMenuItems;
