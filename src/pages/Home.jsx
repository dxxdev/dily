import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/data";
import CategoryLinks from "../components/CategoryLinks";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryLinks />
      <ul className="flex justify-center items-center">
        {products.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
