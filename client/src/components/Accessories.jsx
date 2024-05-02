import React, { useState } from "react";
import { accesories } from "../data/accessories";
import filteredCategory from "../functions/filteredCategory";
import filterOriginalCategory from "../functions/filterOriginalCategory";
import CategoryProductCard from "./CategoryProductCard";

function Accessories({ one, setone }) {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="flex flex-col justify-start items-start gap-30">
      <div className="flex justify-start items-center gap-4">
        <button
          onClick={() => {
            setActiveTab("all");
          }}
          className={`flex justify-center items-center rounded-[10px] px-4 py-3 shadow-product-card-shadow ${activeTab == "all"
            ? "bg-bright-green text-white"
            : "bg-transparent text-black"
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
                className={`flex justify-center items-center rounded-[10px] px-4 py-3 shadow-product-card-shadow ${activeTab == category.originalCategory
                  ? "bg-bright-green text-white"
                  : "bg-transparent text-black"
                  } font-medium text-xs leading-140`}
              >
                {category.originalCategory}
              </button>
            );
          }
        )}
      </div>
      <ul className="grid grid-cols-4 gap-3">
        {accesories &&
          accesories.length > 0 &&
          accesories.map((product) => {
            if (activeTab == "all") {
              return (
                <CategoryProductCard
                  one={one}
                  setone={setone}
                  key={product.id}
                  product={product}
                  view={"grid"}
                />
              );
            } else if (product.category.originalCategory == activeTab) {
              return (
                <CategoryProductCard
                  key={product.id}
                  product={product}
                  view={"grid"}
                />
              );
            }
          })}
      </ul>
    </div>
  );
}

export default Accessories;
