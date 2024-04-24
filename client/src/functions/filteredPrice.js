const filteredPrice = (arr) => {
  const prices = arr.map((item) => item.price());
  return prices;
};

export default filteredPrice;
