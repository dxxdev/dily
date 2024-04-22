import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";
import { products } from "../data/data";
import filteredBrend from "../functions/filteredBrend";
import { Checkbox, InputNumber, Select, Slider } from "antd";
import filteredPrice from "../functions/filteredPrice";
import filteredProductMemory from "../functions/filteredProductMemory";
import ProductCard from "../components/ProductCard";

const OriginalCategoryProducts = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").slice(1).pop();
  const [brends, setBrends] = useState([]);
  const [memoryArr, setMemoryArr] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [openBrend, setOpenBrend] = useState(true);
  const [openMemory, setOpenMemory] = useState(true);
  let checkedBrends = [];
  let checkedMemory = [];
  useEffect(() => {
    setBrends(filteredBrend(filteredOriginalCategory(products, pathname)));
    setMaxPrice(
      Math.max(...filteredPrice(filteredOriginalCategory(products, pathname)))
    );
    setMinPrice(
      Math.min(...filteredPrice(filteredOriginalCategory(products, pathname)))
    );
    setMemoryArr(
      filteredProductMemory(filteredOriginalCategory(products, pathname))
    );
    setFilteredProducts(filteredOriginalCategory(products, pathname));
  }, [pathname]);
  const rangeStyle = {
    trackStyle: { backgroundColor: "#00c65e" },
  };
  console.log(memoryArr);
  return (
    <div className="my-container flex justify-between items-start gap-30">
      <div className="flex flex-col justify-center items-start gap-30">
        <div className="flex flex-col justify-between items-start gap-5">
          <h2 className="text-3xl font-bold leading-120 text-dark-gray">
            {pathname}
          </h2>
          <ul className="flex justify-start items-center gap-4">
            {brends &&
              brends.length > 0 &&
              brends.map((brend, index) => {
                return (
                  <button key={index}>
                    <li className="py-3 px-4 rounded-[10px] shadow-product-card-shadow">
                      {brend}
                    </li>
                  </button>
                );
              })}
          </ul>
        </div>
        <div className="flex justify-start items-start gap-30">
          <div className="flex flex-col justify-center shadow-product-card-shadow items-center w-full max-w-72 gap-30">
            <div className="flex flex-col justify-center items-start gap-30 px-30 py-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <h6 className="text-base leading-152 font-medium text-dark-gray">
                  Narxi:
                </h6>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-center items-center gap-30">
                    <InputNumber value={minPrice} placeholder="MIN" />
                    <InputNumber value={maxPrice} placeholder="MAX" />
                  </div>
                  <Slider
                    className="w-full"
                    range
                    min={minPrice}
                    {...rangeStyle}
                    max={maxPrice}
                    defaultValue={[minPrice, maxPrice]}
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-4 w-full">
                  <button
                    onClick={() => {
                      setOpenBrend((prev) => !prev);
                    }}
                    className="flex justify-between items-center w-full"
                  >
                    <span className="text-base font-medium text-dark-gray leading-152">
                      Brend
                    </span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`${openBrend ? "rotate-180" : "rotate-0"}`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.29728 0.689164L0.473393 4.38293C0.209396 4.63795 0.209386 5.05144 0.473385 5.30646C0.737384 5.56149 1.16542 5.56148 1.42942 5.30645L4.77522 2.07439L8.12136 5.30678C8.38536 5.56181 8.81339 5.5618 9.07739 5.30678C9.34139 5.05175 9.3414 4.63827 9.0774 4.38324L5.26885 0.704169C5.26384 0.699003 5.25853 0.694201 5.25331 0.689157C5.02232 0.466337 4.66555 0.438241 4.40331 0.605499C4.36581 0.629425 4.33029 0.657276 4.29728 0.689164Z"
                          fill="#363A45"
                        />
                      </svg>
                    </span>
                  </button>
                  {openBrend && (
                    <ul className="flex flex-col justify-start items-start gap-2.5">
                      {brends &&
                        brends.length > 0 &&
                        brends.map((brend, index) => {
                          return (
                            <li
                              className="flex justify-start items-center gap-4"
                              key={index}
                            >
                              <Checkbox
                                onChange={() => {
                                  if (!checkedBrends.includes(brend)) {
                                    checkedBrends.push(brend);
                                  } else {
                                    checkedBrends = checkedBrends.filter(
                                      (item) => item != brend
                                    );
                                  }
                                  console.log(checkedBrends);
                                }}
                              >
                                {brend}
                              </Checkbox>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
                <div className="flex flex-col justify-start items-start gap-4 w-full">
                  <button
                    onClick={() => {
                      setOpenMemory((prev) => !prev);
                    }}
                    className="flex justify-between items-center w-full"
                  >
                    <span className="text-base font-medium text-dark-gray leading-152">
                      Xotira
                    </span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`${openMemory ? "rotate-180" : "rotate-0"}`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.29728 0.689164L0.473393 4.38293C0.209396 4.63795 0.209386 5.05144 0.473385 5.30646C0.737384 5.56149 1.16542 5.56148 1.42942 5.30645L4.77522 2.07439L8.12136 5.30678C8.38536 5.56181 8.81339 5.5618 9.07739 5.30678C9.34139 5.05175 9.3414 4.63827 9.0774 4.38324L5.26885 0.704169C5.26384 0.699003 5.25853 0.694201 5.25331 0.689157C5.02232 0.466337 4.66555 0.438241 4.40331 0.605499C4.36581 0.629425 4.33029 0.657276 4.29728 0.689164Z"
                          fill="#363A45"
                        />
                      </svg>
                    </span>
                  </button>
                  {openMemory && (
                    <ul className="flex flex-col justify-start items-start gap-2.5">
                      {memoryArr &&
                        memoryArr.length > 0 &&
                        memoryArr.map((memory, index) => {
                          return (
                            <li
                              className="flex justify-start items-center gap-4"
                              key={index}
                            >
                              <Checkbox
                                onChange={() => {
                                  if (!checkedMemory.includes(memory)) {
                                    checkedMemory.push(memory);
                                  } else {
                                    checkedMemory = checkedMemory.filter(
                                      (item) => item != memory
                                    );
                                  }
                                  console.log(checkedMemory);
                                }}
                              >
                                {memory}
                              </Checkbox>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
                <div className="flex justify-center flex-col gap-5 items-center w-full">
                  <button className="text-bright-green transition-all w-full flex justify-center items-center hover:text-white bg-white hover:bg-bright-green py-3 rounded-[10px] border-2 border-bright-green text-sm leading-120 font-medium tracking-0.7">
                    Saralash
                  </button>
                  <button className="text-bright-green transition-all w-full flex justify-center items-center hover:text-white bg-white hover:bg-bright-green py-3 rounded-[10px] border-2 border-bright-green text-sm leading-120 font-medium tracking-0.7">
                    Filtrni o'chirish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grow flex flex-col justify-start items-stretch gap-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal leading-120 text-medium-gray">
                {filteredProducts.length}
              </p>
              <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-2">
                  <span>
                    <p>Saralash</p>
                  </span>
                  <span>
                    <Select
                      defaultValue="Avval yangilari"
                      options={[
                        {
                          value: "Avval yangilari",
                          label: "Avval yangilari",
                        },
                      ]}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4">
              {filteredProducts &&
                filteredProducts.length > 0 &&
                filteredProducts.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OriginalCategoryProducts;
