import React, { useState } from "react";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredCategoryMenu from "../functions/filteredCategoryMenu";

const CategoryMenu = ({ opened, setOpened }) => {
  const [hoverCategory, setHoverCategory] = useState(null);
  return (
    <ul
      className={`rounded-[10px] absolute top-32 shadow-menu-shadow flex flex-col items-start gap-1 py-7 bg-light-gray ${
        opened ? "block" : "hidden"
      }`}
    >
      {filteredCategoryMenuItems(filteredCategory(products)).map((category) => {
        return (
          <li
            key={category.id}
            className="relative w-full transition-all duration-300 group"
            onMouseEnter={() => {
              setHoverCategory(category.name);
            }}
          >
            <Link
              to={`/products/${category.name}`}
              className="transition-all duration-300 px-7 w-full py-1 inline-block"
            >
              <div className="flex justify-between w-full items-center gap-3">
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
                <span className="group-hover:opacity-100 opacity-0 transition-all duration-300">
                  <svg
                    width="5"
                    height="9"
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.80888 4.97811L1.11512 8.802C0.860095 9.06599 0.44661 9.066 0.191586 8.80201C-0.0634387 8.53801 -0.0634287 8.10997 0.191593 7.84598L3.42366 4.50017L0.191263 1.15403C-0.0637612 0.890034 -0.0637511 0.461998 0.191271 0.198002C0.446293 -0.0659952 0.859777 -0.0660048 1.1148 0.197994L4.79388 4.00654C4.79904 4.01155 4.80385 4.01686 4.80889 4.02208C5.03171 4.25307 5.05981 4.60984 4.89255 4.87208C4.86862 4.90958 4.84077 4.9451 4.80888 4.97811Z"
                      fill="#363A45"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
      {hoverCategory && (
        <ul className="absolute p-7 top-0 left-[calc(100%-10px)] w-max gap-5 grid grid-cols-2 h-full bg-light-gray rounded-r-[10px]">
          {filteredCategoryMenu(hoverCategory).map((category) => {
            return (
              <li
                key={category.id}
                className="group w-min h-min transition-all duration-300"
              >
                <Link
                  onClick={() => {
                    setOpened((prev) => !prev);
                  }}
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
