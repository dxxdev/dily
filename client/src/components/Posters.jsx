import React, { useEffect, useState } from "react";
import { poster1 } from "../assets/svg";
import ProductCard from "./ProductCard";
import { products } from "../data/data";
import randomNumber from "../functions/randomNumber";
import { useNavigate } from "react-router-dom";

const Posters = ({ one, setone }) => {
  const navigate = useNavigate();
  const [randomProductId, setRandomProductId] = useState(0);
  useEffect(() => {
    setRandomProductId(randomNumber(products));
  }, []);

  return (
    <div className="flex my-container gap-10">
      <div className="flex w-full justify-between bg-white shadow-product-card-shadow rounded-[10px] overflow-hidden">
        <div className="py-11 pl-9 flex justify-start items-start flex-col gap-5">
          <h4 className="text-3xl font-bold tracking-0.7 w-full">
            O'tkazib yubormang!
          </h4>
          <p className="text-2xl leading-152 font-semibold tracking-wide">
            Uyingiz va bog'ingiz uchun <br /> eng yaxshi takliflar
          </p>
          <button className="btn text-white !py-2 tracking-0.7">Batafsil</button>
        </div>
        <div className="h-full">
          <img src={poster1} className="h-full" alt={poster1 + ' img'} />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 items-center rounded-[10px] gradient py-5 px-9">
        <h4 className="text-2xl text-white leading-normal font-bold">
          Kun chegirmasi
        </h4>
        <div className="relative">
          <ProductCard
            one={one} setone={setone}
            widthFixed={true}
            discount={true}
            product={products[randomProductId]}
          />
          <div className="rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 shadow-2xl flex justify-center items-center bg-white w-16 aspect-square">
            <p className="text-[22px] text-bright-orange font-bold leading-120 tracking-wide">
              20%
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate(
              `/products/${products[randomProductId].category.name}/${products[randomProductId].category.originalCategory}/${products[randomProductId].id}`
            );
          }}
          className="px-60 py-3 bg-white w-full text-sm font-medium text-bright-green leading-120 rounded-[10px] flex justify-center items-center"
        >
          Sotib olish
        </button>
      </div>
    </div>
  );
};

export default Posters;
