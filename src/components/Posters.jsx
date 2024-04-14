import React from "react";
import { poster1 } from "../assets/svg";

const Posters = () => {
  return (
    <div className="flex my-container gap-12">
      <div className="flex w-full justify-between bg-white shadow-product-card-shadow rounded-[10px] overflow-hidden">
        <div className="py-11 pl-9 flex justify-start items-start flex-col gap-5">
          <h4 className="text-3xl font-bold tracking-0.7 w-full">O'tkazib yubormang!</h4>
          <p className="text-2xl leading-152 font-semibold tracking-wide">Uyingiz va bog'ingiz uchun <br /> eng yaxshi takliflar</p>
          <button className="btn !py-2 tracking-0.7">Batafsil</button>
        </div>
        <div className="h-full">
          <img src={poster1} className="h-full" alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Posters;
