const filteredProductMemory = (arr) => {
  const propertyArr = arr.map((item) => item.property);
  const returnedArr = propertyArr.map((item) => {
    const memoryArr = item.filter((i) => i.name.toLowerCase() == "xotira");
    return memoryArr;
  });
  const incompletedArr = returnedArr.map((item) => item[0].types).flat();
  return Array.from(new Set(incompletedArr));
};

export default filteredProductMemory;
