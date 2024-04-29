import React, { useState } from "react";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import { accesories } from "../data/accessories";
import filteredCategory from "../functions/filteredCategory";

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
        {filteredCategoryMenuItems(filteredCategory(accesories)).map(
          (category) => {
            return (
              <button
                onClick={() => {
                  setActiveTab(category.name);
                }}
                key={category.id}
                className={`flex justify-center items-center rounded-[10px] px-4 py-3 shadow-product-card-shadow ${
                  activeTab == category.name
                    ? "bg-bright-green text-white"
                    : "bg-white text-black"
                } font-medium text-xs leading-140`}
              >
                {category.name}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Accessories;
