function filteredBrend(arr) {
  const unique = [];
  for (const obj of arr) {
    if (!unique.some((u) => u?.category.brend == obj?.category.brend)) {
      unique.push(obj);
    }
  }
  return unique.map((item) => item?.category?.brend);
}

export default filteredBrend;
