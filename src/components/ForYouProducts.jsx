import React from "react";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";

const ForYouProducts = () => {
  return (
    <div className="my-container flex flex-col justify-start items-start gap-10">
      <h3 className="font-bold text-2xl leading-120">Siz uchun:</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.slice(0, 5).map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ForYouProducts;
