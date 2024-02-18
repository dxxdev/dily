import React from "react";

const HeroItem = () => {
  return (
    <div
      className={`w-[512px] h-56 bg-[url(/src/assets/svg/hero-1.svg)] bg-no-repeat bg-contain relative bg-right bg-[#00B0F5] rounded-[20px] shadow-md p-8`}
    >
      <h2 className="text-2xl font-bold text-white">Dily.uzdan chegirmalar</h2>
      <h2 className="text-2xl relative top-8 left-12 font-bold text-white">
        Dily.uzdan chegirmalar
      </h2>
      <button className="absolute bottom-8 left-8 px-3 py-2 bg-[#00FFFF] rounded-full">
        <svg
          width="10.418274"
          height="18.008057"
          viewBox="0 0 10.4183 18.0081"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector 3"
            d="M1.00409 1.00403L9.00409 9.00403L1.00409 17.004"
            stroke="#FFFFFF"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroItem;
