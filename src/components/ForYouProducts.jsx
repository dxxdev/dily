import React from "react";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";
import randomNumbersArr from "../functions/randomNumbersArr";
import { Link } from "react-router-dom";

const ForYouProducts = () => {
  return (
    <div className="my-container flex flex-col justify-start items-start gap-10">
      <div className="flex w-full justify-between items-center leading-120">
        <h3 className="font-bold text-2xl leading-120 text-dark-gray font-open-sans">
          Siz uchun:
        </h3>
        <Link
          to={"/products"}
          className="text-sm leading-120 font-medium text-dark-gray opacity-60 hover:opacity-80"
        >
          barchasini ko'rish
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {randomNumbersArr(products, 5).map((num, index) => {
          return <ProductCard product={products[num]} />;
        })}
      </ul>
    </div>
  );
};

export default ForYouProducts;
