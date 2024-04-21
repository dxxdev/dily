import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";
import { products } from "../data/data";
import filteredBrend from "../functions/filteredBrend";

const OriginalCategoryProducts = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").slice(1).pop();
  const [brends, setBrends] = useState([]);
  useEffect(() => {
    setBrends(filteredBrend(filteredOriginalCategory(products, pathname)));
  }, []);
  return (
    <div className="my-container">
      <div className="flex flex-col justify-center items-start gap-30">
        <div className="flex flex-col justify-between items-start gap-5">
          <h2 className="text-3xl font-bold leading-120 text-dark-gray">
            {pathname}
          </h2>
          <ul className="flex justify-start items-center gap-4">
            {brends &&
              brends.length > 0 &&
              brends.map((brend, index) => {
                return (
                  <button key={index}>
                    <li className="py-3 px-4 rounded-[10px] shadow-product-card-shadow">
                      {brend}
                    </li>
                  </button>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OriginalCategoryProducts;
