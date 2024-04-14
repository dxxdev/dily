import React from "react";
import Hero from "../components/Hero";
import CategoryLinks from "../components/CategoryLinks";
import ForYouProducts from "../components/ForYouProducts";
import OfferedProducts from "../components/OfferedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryLinks />
      <div className="flex flex-col gap-20">
        <ForYouProducts />
        <OfferedProducts />
      </div>
    </div>
  );
};

export default Home;
