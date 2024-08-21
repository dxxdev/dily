import React, { useState } from "react";
import { ServisesRepairData } from "../data/ServisesPageData";
import { Link } from "react-router-dom";
import union from "../assets/svg/Union.svg";

const ServisesRepair = () => {
  const [sliceNumber, setSliceNumber] = useState(12);
  const sliceFunctions = () => {
    setSliceNumber(12);
  };
  const closeFunctions = () => {
    setSliceNumber(ServisesRepairData.length);
  };
  return (
    <section>
      <div className="my-container">
        <h2 className="font-bold text-[32px] leading-38 text-dark-gray mb-30 text-center">
          Biz ta'mirlaymiz
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-30 gap-y-[45px] mb-30">
          {ServisesRepairData.slice(0, sliceNumber).map((e, index) => {
            return (
              <li
                key={index}
                className="py-3.5 px-3 shadow-product-card-shadow rounded-10 w-full max-w-[170px]"
              >
                <Link to={`/Servises/${e.title}`}>
                  <img className="mb-4" src={e.img} alt={e.title} />
                  <p className="font-bold text-base leading-6 text-dark-gray text-center">
                    {e.title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center flex-col">
          <button
            onClick={sliceFunctions}
            className={`${
              sliceNumber === 12 ? "hidden" : "flex"
            } items-center font-bold text-sm leading-5`}
          >
            Ortga
            <img
              className="ml-2.5 transform rotate-180"
              src={union}
              alt="union"
            />
          </button>
          <button
            onClick={closeFunctions}
            className={` ${
              sliceNumber === 12 ? "flex" : "hidden"
            } items-center font-bold text-sm leading-5`}
          >
            Yana ko'rsatish
            <img className="ml-2.5 " src={union} alt="union" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServisesRepair;
