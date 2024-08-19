import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import searchingProducts from "../functions/searchedProducts";
import { InputNumber, Select } from "antd";
import Slider from "react-slick";
import CategoryProductCard from "../components/CategoryProductCard";
import filteredPrice from "../functions/filteredPrice";
import filteredProductMemory from "../functions/filteredProductMemory";

const Searched = ({ one, setone }) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const [searchedProducts, setSearchedProducts] = useState(
    searchingProducts(searchQuery)
  );

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [memoryArr, setMemoryArr] = useState([]);
  const [openMemory, setOpenMemory] = useState(true);
  const [page, setPage] = useState(1);
  const [checkedMemory, setCheckedMemory] = useState("all");

  const viewed = 12;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(viewed);

  const pages = Math.ceil(searchedProducts.length / viewed);
  let slicedProducts = searchedProducts.slice(startIndex, endIndex);

  useEffect(() => {
    setMaxPrice(Math.max(...filteredPrice(searchingProducts(searchQuery))));
    setMinPrice(Math.min(...filteredPrice(searchingProducts(searchQuery))));
    setMemoryArr(filteredProductMemory(searchingProducts(searchQuery)));
    setSearchedProducts(searchingProducts(searchQuery));
  }, [searchQuery]);

  const rangeStyle = {
    trackStyle: { backgroundColor: "#00c65e" },
  };
  console.log(searchedProducts);
  return (
    <div className="my-container flex justify-between items-start gap-30">
      <div className="flex flex-col w-full justify-center items-start gap-30">
        <div className="flex flex-col justify-between items-start gap-5">
          <h2 className="text-3xl font-bold leading-120 text-dark-gray">
            "{searchQuery.toLocaleUpperCase()}"{" "}
            <span className="text-lg">
              qidiruv natijalari {searchedProducts.length}ta
            </span>
          </h2>
        </div>
        <div className="flex justify-start w-full items-start gap-30">
          <div className="flex flex-col justify-center shadow-product-card-shadow items-center w-full max-w-80 gap-30">
            <div className="flex flex-col justify-center items-stretch gap-30 px-30 py-6">
              <div className="flex flex-col justify-start items-stretch gap-4">
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
                <div className="flex flex-col justify-start items-stretch gap-4 w-full">
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
                    <ul className="flex flex-col justify-start items-stretch gap-2.5">
                      {memoryArr &&
                        memoryArr.length > 0 &&
                        memoryArr.map((memory, index) => {
                          return (
                            <li
                              className="flex justify-start items-center gap-4"
                              key={index}
                            >
                              <button
                                className={`px-2 w-full flex justify-start py-0.5 hover:text-bright-green ${
                                  checkedMemory == memory
                                    ? "text-bright-green"
                                    : ""
                                }`}
                                onClick={() => {
                                  setSearchedProducts(
                                    searchingProducts(searchQuery).filter(
                                      (product) =>
                                        product.property
                                          .find((item) => item.name == "Xotira")
                                          .types.includes(memory)
                                    )
                                  );
                                  setCheckedMemory(memory);
                                }}
                              >
                                {memory}
                              </button>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
                <div className="flex justify-center flex-col gap-5 items-center w-full">
                  <button
                    onClick={() => {
                      setSearchedProducts(searchingProducts(searchQuery));
                      setCheckedMemory("all");
                    }}
                    className="text-bright-green transition-all w-full flex justify-center items-center hover:text-white bg-white hover:bg-bright-green py-3 rounded-[10px] border-2 border-bright-green text-sm leading-120 font-medium tracking-0.7"
                  >
                    Filtrni o'chirish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-stretch gap-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal leading-120 text-medium-gray">
                {searchedProducts.length}
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
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-3">
              {slicedProducts &&
                slicedProducts.length > 0 &&
                slicedProducts.map((product) => {
                  return (
                    <CategoryProductCard
                      one={one}
                      setone={setone}
                      key={product.id}
                      product={product}
                      view={"grid"}
                    />
                  );
                })}
            </div>
            {/* pagination */}
            <div className="flex space-x-5 justify-center items-center">
              {/* prev page button */}
              <button
                onClick={() => {
                  if (page <= pages) {
                    setPage(1);
                    setStartIndex(0);
                    setEndIndex(viewed);
                  } else {
                    setPage((prev) => (prev -= viewed));
                    setStartIndex((prev) => (prev -= viewed));
                    setEndIndex((prev) => (prev -= viewed));
                  }
                }}
                className="group w-30 h-30 shadow-product-card-shadow rounded-[10px] hover:bg-bright-green flex justify-center items-center transition-all"
              >
                <svg
                  width="9"
                  height="15"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.875443 4.25822L4.56921 0.43433C4.82423 0.170334 5.23772 0.170324 5.49274 0.434322C5.74776 0.698321 5.74775 1.12636 5.49273 1.39035L2.26067 4.73615L5.49306 8.0823C5.74809 8.34629 5.74808 8.77433 5.49305 9.03833C5.23803 9.30232 4.82455 9.30233 4.56952 9.03833L0.890448 5.22979C0.885282 5.22477 0.880481 5.21947 0.875436 5.21425C0.652616 4.98325 0.62452 4.62649 0.791778 4.36425C0.815704 4.32675 0.843555 4.29123 0.875443 4.25822Z"
                    fill="currentColor"
                    className="fill-dark-gray group-hover:fill-white"
                  />
                </svg>
              </button>
              <p className="text-sm font-medium leading-120 text-dark-gray flex justify-center items-center gap-2">
                <span>{page}</span>
                <span>/</span>
                <span>{pages}</span>
              </p>
              {/* next page button */}
              <button
                onClick={() => {
                  if (page == pages) {
                    setPage(pages);
                    setEndIndex(page * viewed);
                    setStartIndex(page - viewed - viewed);
                  } else {
                    setPage((prev) => (prev += 1));
                    setEndIndex((prev) => (prev += viewed));
                    setStartIndex((prev) => (prev += viewed));
                  }
                }}
                className="group w-30 h-30 shadow-product-card-shadow rounded-[10px] hover:bg-bright-green flex justify-center items-center transition-all"
              >
                <svg
                  width="9"
                  height="15"
                  viewBox="0 0 5 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.80888 4.97811L1.11512 8.802C0.860095 9.06599 0.44661 9.066 0.191586 8.80201C-0.0634387 8.53801 -0.0634287 8.10997 0.191593 7.84598L3.42366 4.50017L0.191263 1.15403C-0.0637612 0.890034 -0.0637511 0.461998 0.191271 0.198002C0.446293 -0.0659952 0.859777 -0.0660048 1.1148 0.197994L4.79388 4.00654C4.79904 4.01155 4.80385 4.01686 4.80889 4.02208C5.03171 4.25307 5.05981 4.60984 4.89255 4.87208C4.86862 4.90958 4.84077 4.9451 4.80888 4.97811Z"
                    fill="currentColor"
                    className="fill-dark-gray
                group-hover:fill-white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searched;
