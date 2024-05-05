import React, { useState } from "react";
import ServisesWarning from "../assets/svg/ServisesWarning.svg";
import union from "../assets/svg/Union.svg";
import { serviseMalfunctionsData } from "../data/ServisesPageData";
const ServisesMalfunctions = () => {
  const [sliceNumber, setSliceNumber] = useState(18);
  const sliceFunctions = () => {
    setSliceNumber(serviseMalfunctionsData.length);
  };
  const closeFunctions = () => {
    setSliceNumber(18);
  };
  return (
    <section className="">
      <div className="my-container ">
        <div className="pt-30 pb-10  shadow-product-card-shadow px-68 rounded-10 ">
          <h2 className="font-bold text-[32px] leading-38 text-dark-gray mb-11 text-center">
            Tuzata olamiz
          </h2>
          <ul className="grid grid-cols-3 gap-x-[110px] gap-y-[15px] mb-10 ">
            {serviseMalfunctionsData.slice(0, sliceNumber).map((e, index) => {
              return (
                <li key={index} className="flex items-center space-x-3.5">
                  <img src={ServisesWarning} alt="Servise" />
                  <p className="font-medium text-base leading-6 text-dark-gray">
                    {e.title}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center flex-col">
            <button
              onClick={sliceFunctions}
              className={`${sliceNumber === 18 ? "block" : "hidden"}`}
            >
              <img src={union} alt="union" />
            </button>
            <button
              onClick={closeFunctions}
              className={`transform rotate-180 ${
                sliceNumber === 18 ? "hidden" : "block"
              }`}
            >
              <img src={union} alt="union" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServisesMalfunctions;
