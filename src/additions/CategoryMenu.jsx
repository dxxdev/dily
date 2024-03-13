import React from "react";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";
import { Link } from "react-router-dom";

const CategoryMenu = ({ opened }) => {
  return (
    <ul
      className={`rounded-[10px] shadow-menu-shadow p-7 bg-light-gray ${
        opened ? "block" : "hidden"
      }`}
    >
      {filteredCategory(products).map((category) => {
        return (
          <li key={category.id}>
            <Link>
              <div className="flex justify-start items-center gap-3">
                <span className="inline-flex justify-center items-center w-[25px] h-[25px]">
                  <img className="h-5" src={category.catalogIcon} alt="" />
                </span>
                <span className="text-dark-gray leading-152 font-medium text-base">{category.name}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryMenu;
