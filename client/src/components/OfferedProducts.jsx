import React from "react";
import { products } from "../data/data";
import ProductCard from "./main-components/ProductCard";
import randomNumbersArr from "../functions/randomNumbersArr";
import { Link } from "react-router-dom";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";

const OfferedProducts = ({ one, setone }) => {
  return (
    <div className="my-container flex flex-col justify-start items-start gap-10">
      <div className="flex w-full justify-between items-center leading-120">
        <h3 className="flex items-end gap-0.5 font-bold text-2xl leading-120 text-dark-gray font-open-sans">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
          >
            <path
              d="M7.10475 0.921875H0V7.25172H7.10475V0.921875Z"
              fill="#00C65E"
            />
            <path
              d="M0 9.75338H7.10074V25.955H10.1531C17.0021 25.955 20.4253 22.6273 20.4227 15.9718C20.4227 9.45232 17.2445 6.19377 10.8881 6.19615H9.60581V0.921875L10.5226 0.921875C15.99 0.921875 20.2379 2.23388 23.2662 4.8579C26.2944 7.48192 27.8072 11.1353 27.8045 15.8179C27.8045 20.8036 26.2369 24.6203 23.1015 27.2682C19.9661 29.9161 15.4278 31.2484 9.48639 31.2651H0V9.75338Z"
              fill="#00C65E"
            />
          </svg>
          <span className="text-2xl font-bold leading-tight text-bright-green">
            ily.uz
          </span>
          <span>dan takliflar</span>
        </h3>
        <Link
          to={"/products"}
          className="text-sm leading-120 font-medium text-dark-gray opacity-60 hover:opacity-80"
        >
          barchasini ko'rish
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {randomNumbersArr(
          filteredOriginalCategory(products, "Noutbuklar"),
          5
        ).map((num, index) => {
          return <ProductCard one={one} setone={setone} key={index} product={products[num]} />;
        })}
      </ul>
    </div>
  );
};

export default OfferedProducts;
