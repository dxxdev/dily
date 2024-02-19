import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <ul className="flex justify-center items-center">
        <ProductCard />
      </ul>
    </div>
  );
};

export default Home;
