import React from "react";
import Hero from "../components/Hero";
import CategoryLinks from "../components/CategoryLinks";
import ForYouProducts from "../components/ForYouProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryLinks />
      <ForYouProducts />
    </div>
  );
};

export default Home;
