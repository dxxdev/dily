import React from "react";
import HeroItem from "./HeroItem";

const Hero = () => {
  return (
    <div className="my-container py-20 overflow-hidden flex justify-center items-center">
      <div className="flex justify-center w-max gap-8 items-center">
        <HeroItem />
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </div>
    </div>
  );
};

export default Hero;
