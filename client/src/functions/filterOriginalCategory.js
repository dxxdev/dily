function filterOriginalCategory(arr) {
  const unique = [];
  for (const obj of arr) {
    if (!unique.some((u) => u?.originalCategory == obj?.originalCategory)) {
      unique.push(obj);
    }
  }
  return unique;
}

export default filterOriginalCategory;
