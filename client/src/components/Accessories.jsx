import React, { useState } from "react";
import { accesories } from "../data/accessories";
import filteredCategory from "../functions/filteredCategory";
import filterOriginalCategory from "../functions/filterOriginalCategory";

function Accessories() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="flex flex-col justify-start items-start gap-30">
      <div className="flex justify-start items-center gap-4">
        <button
          onClick={() => {
            setActiveTab("all");
          }}
          className={`flex justify-center items-center rounded-[10px] px-4 py-3 shadow-product-card-shadow ${
            activeTab == "all"
              ? "bg-bright-green text-white"
              : "bg-white text-black"
          } font-medium text-xs leading-140`}
        >
          Barchasi
        </button>
        {filterOriginalCategory(filteredCategory(accesories)).map(
          (category) => {
            return (
              <button
                onClick={() => {
                  setActiveTab(category.originalCategory);
                }}
                key={category.id}
                className={`flex justify-center items-center rounded-[10px] px-4 py-3 shadow-product-card-shadow ${
                  activeTab == category.originalCategory
                    ? "bg-bright-green text-white"
                    : "bg-white text-black"
                } font-medium text-xs leading-140`}
              >
                {category.originalCategory}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Accessories;
