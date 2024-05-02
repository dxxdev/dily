import React from "react";
import Hero from "../components/Hero";
import CategoryLinks from "../components/CategoryLinks";
import ForYouProducts from "../components/ForYouProducts";
import OfferedProducts from "../components/OfferedProducts";
import Posters from "../components/Posters";
import DilyMap from "../components/DilyMap";

const Home = ({ setSaving, one, setone }) => {
  return (
    <div>
      <Hero />
      <DilyMap />
      <div className="flex flex-col gap-20">
        <CategoryLinks />
        <ForYouProducts one={one} setone={setone} />
        <OfferedProducts one={one} setone={setone} />
        <Posters one={one} setone={setone} />
      </div>
    </div>
  );
};

export default Home;
