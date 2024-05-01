import React from "react";
import heroImg from '../assets/website_img/home-hero-img.png'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="myHeroGradient py-20 bg-gradient-to-r from-transparent to-bright-green/30">
      <div className="my-container  flex justify-center w-max gap-8 items-center">
        <div className="w-1/2 flex flex-col items-start justify-between gap-10">
          <h1 className="text-5xl font-open-sans text-bright-green w-full">Assalomu alaykum Dily.uz
 saytiga xush kelibsiz</h1>
          <Link className="w-1/2 text-center py-3 rounded-md bg-bright-green text-white font-open-sans inline-block">Harid qiling</Link>
        </div>
        <img src={heroImg} className="w-2/3 jumping" alt="phones img" />
      </div>
    </div>
  );
};

export default Hero;
