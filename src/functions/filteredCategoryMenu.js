import { products } from "../data/data";
import filteredCategory from "./filteredCategory";

const filteredCategoryMenu = (categoryName) => {
  let filteredArr = filteredCategory(products).filter(
    (category) => category.name == categoryName
  );
  return filteredArr;
};

export default filteredCategoryMenu;
