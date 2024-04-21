import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";
import { products } from "../data/data";
import filteredBrend from "../functions/filteredBrend";
import { InputNumber, Slider } from "antd";
import filteredPrice from "../functions/filteredPrice";

const OriginalCategoryProducts = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").slice(1).pop();
  const [brends, setBrends] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  useEffect(() => {
    setBrends(filteredBrend(filteredOriginalCategory(products, pathname)));
    setMaxPrice(
      Math.max(...filteredPrice(filteredOriginalCategory(products, pathname)))
    );
    setMinPrice(
      Math.min(...filteredPrice(filteredOriginalCategory(products, pathname)))
    );
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
        <div className="flex justify-start items-start gap-30">
          <div className="flex flex-col justify-center shadow-product-card-shadow items-center w-full max-w-72 gap-30">
            <div className="flex flex-col justify-center items-start gap-30 px-30 py-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <h6 className="text-base leading-152 font-medium text-dark-gray">
                  Narxi:
                </h6>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-center items-center gap-30">
                    <InputNumber value={minPrice} placeholder="MIN" />
                    <InputNumber value={maxPrice} placeholder="MAX" />
                  </div>
                  <Slider
                    className="w-full"
                    range
                    min={minPrice}
                    max={maxPrice}
                    defaultValue={[minPrice, maxPrice]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OriginalCategoryProducts;
