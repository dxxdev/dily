import React, { useState } from "react";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredCategoryMenu from "../functions/filteredCategoryMenu";

const CategoryMenu = ({ opened }) => {
  const [hoverCategory, setHoverCategory] = useState(null);
  return (
    <ul
      className={`rounded-[10px] shadow-menu-shadow flex flex-col items-start gap-1 py-7 bg-light-gray overflow-hidden ${
        opened ? "block" : "hidden"
      }`}
    >
      {filteredCategoryMenuItems(filteredCategory(products)).map((category) => {
        return (
          <li
            key={category.id}
            className="relative transition-all duration-300 hover:shadow-outside-shadow group"
            onMouseEnter={() => {
              setHoverCategory(category.name);
            }}
          >
            <Link
              to={`/products/${category.name}`}
              className="transition-all duration-300 px-7 py-1 inline-block"
            >
              <div className="flex justify-start items-center gap-3">
                <span className="inline-flex justify-center items-center w-[25px] h-[25px]">
                  <img
                    className="w-5 opacity-90 group-hover:opacity-100"
                    src={category.catalogIcon}
                    alt=""
                  />
                </span>
                <span className="text-dark-gray group-hover:text-bright-green leading-152 font-medium text-base">
                  {category.name}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
      {hoverCategory && (
        <ul className="absolute p-7 top-0 left-[calc(100%-10px)] w-max gap-5 grid grid-cols-2 h-full bg-light-gray rounded-r-[10px]">
          {hoverCategory &&
            filteredCategoryMenu(hoverCategory).map((category) => {
              return (
                <li
                  key={category.id}
                  className="group w-min h-min transition-all duration-300"
                >
                  <Link
                    to={`/products/${hoverCategory}/${category.originalCategory}`}
                    className="group-hover:text-bright-green transition-all duration-300"
                  >
                    {category.originalCategory}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </ul>
  );
};

export default CategoryMenu;
