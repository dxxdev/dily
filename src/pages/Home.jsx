import React from "react";
import Hero from "../components/Hero";
import CategoryLinks from "../components/CategoryLinks";
import ForYouProducts from "../components/ForYouProducts";
import OfferedProducts from "../components/OfferedProducts";
import Posters from "../components/Posters";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-20">
        <CategoryLinks />
        <ForYouProducts />
        <OfferedProducts />
        <Posters />
      </div>
    </div>
  );
};

export default Home;
