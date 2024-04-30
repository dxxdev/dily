import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";
import { products } from "../data/data";
import filteredBrend from "../functions/filteredBrend";
import { Checkbox, InputNumber, Select, Slider } from "antd";
import filteredPrice from "../functions/filteredPrice";
import filteredProductMemory from "../functions/filteredProductMemory";
import CategoryProductCard from "../components/CategoryProductCard";
import filterProducts from "../functions/filterProducts";

const OriginalCategoryProducts = ({ one, setone }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/").slice(1).pop();
  const [brends, setBrends] = useState([]);
  const [memoryArr, setMemoryArr] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [openBrend, setOpenBrend] = useState(true);
  const [openMemory, setOpenMemory] = useState(true);
  const [viewType, setViewType] = useState("grid");
  let checkedBrends = [];
  let checkedMemory = [];
  const viewed = 12;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(viewed);
  const pages = Math.ceil(filteredProducts.length / viewed);
  const [sortingDisabled, setSortingDisabled] = useState(false);
  let slicedProducts = filteredProducts.slice(startIndex, endIndex);
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
  }, [pathname, viewType]);
  const rangeStyle = {
    trackStyle: { backgroundColor: "#00c65e" },
  };
  return (
    <div className="my-container flex justify-between items-start gap-30">
      <div className="flex flex-col w-full justify-center items-start gap-30">
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
        <div className="flex justify-start w-full items-start gap-30">
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
                                  setSortingDisabled(false);
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
                                  setSortingDisabled(false);
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
                  <button
                    disabled={sortingDisabled}
                    onClick={() => {
                      console.log(
                        filterProducts(
                          filteredOriginalCategory(products, pathname),
                          checkedBrends,
                          checkedMemory
                        )
                      );
                      setSortingDisabled(true);
                      setFilteredProducts(
                        filterProducts(
                          filteredOriginalCategory(products, pathname),
                          checkedBrends,
                          checkedMemory
                        )
                      );
                    }}
                    className="text-bright-green transition-all w-full flex justify-center items-center hover:text-white bg-white hover:bg-bright-green py-3 rounded-[10px] border-2 border-bright-green text-sm leading-120 font-medium tracking-0.7"
                  >
                    Saralash
                  </button>
                  <button
                    onClick={() => {
                      checkedBrends = [];
                      checkedMemory = [];
                      setSortingDisabled(false);
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
                <div className="flex justify-center items-center gap-2.5">
                  {/* change view grid */}
                  <button
                    onClick={() => {
                      setViewType("grid");
                      slicedProducts = filteredProducts.slice(0, viewed);
                    }}
                  >
                    {viewType == "grid" ? (
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.32324 6.45959H4.32324C4.87324 6.45959 5.32324 5.97497 5.32324 5.38266V1.07497C5.32324 0.482662 4.87324 -0.00195312 4.32324 -0.00195312H1.32324C0.773242 -0.00195312 0.323242 0.482662 0.323242 1.07497V5.38266C0.323242 5.97497 0.773242 6.45959 1.32324 6.45959ZM1.32324 13.998H4.32324C4.87324 13.998 5.32324 13.5134 5.32324 12.9211V8.61343C5.32324 8.02112 4.87324 7.53651 4.32324 7.53651H1.32324C0.773242 7.53651 0.323242 8.02112 0.323242 8.61343V12.9211C0.323242 13.5134 0.773242 13.998 1.32324 13.998ZM7.32324 13.998H10.3232C10.8732 13.998 11.3232 13.5134 11.3232 12.9211V8.61343C11.3232 8.02112 10.8732 7.53651 10.3232 7.53651H7.32324C6.77324 7.53651 6.32324 8.02112 6.32324 8.61343V12.9211C6.32324 13.5134 6.77324 13.998 7.32324 13.998ZM13.3232 13.998H16.3232C16.8732 13.998 17.3232 13.5134 17.3232 12.9211V8.61343C17.3232 8.02112 16.8732 7.53651 16.3232 7.53651H13.3232C12.7732 7.53651 12.3232 8.02112 12.3232 8.61343V12.9211C12.3232 13.5134 12.7732 13.998 13.3232 13.998ZM7.32324 6.45959H10.3232C10.8732 6.45959 11.3232 5.97497 11.3232 5.38266V1.07497C11.3232 0.482662 10.8732 -0.00195312 10.3232 -0.00195312H7.32324C6.77324 -0.00195312 6.32324 0.482662 6.32324 1.07497V5.38266C6.32324 5.97497 6.77324 6.45959 7.32324 6.45959ZM12.3232 1.07497V5.38266C12.3232 5.97497 12.7732 6.45959 13.3232 6.45959H16.3232C16.8732 6.45959 17.3232 5.97497 17.3232 5.38266V1.07497C17.3232 0.482662 16.8732 -0.00195312 16.3232 -0.00195312H13.3232C12.7732 -0.00195312 12.3232 0.482662 12.3232 1.07497Z"
                          fill="#00C65E"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 5.96154H1C0.760391 5.96154 0.5 5.73632 0.5 5.38462V1.07692C0.5 0.725217 0.760391 0.5 1 0.5H4C4.23961 0.5 4.5 0.725217 4.5 1.07692V5.38462C4.5 5.73632 4.23961 5.96154 4 5.96154ZM4 13.5H1C0.760391 13.5 0.5 13.2748 0.5 12.9231V8.61539C0.5 8.26368 0.760391 8.03846 1 8.03846H4C4.23961 8.03846 4.5 8.26368 4.5 8.61539V12.9231C4.5 13.2748 4.23961 13.5 4 13.5ZM10 13.5H7C6.76039 13.5 6.5 13.2748 6.5 12.9231V8.61539C6.5 8.26368 6.76039 8.03846 7 8.03846H10C10.2396 8.03846 10.5 8.26368 10.5 8.61539V12.9231C10.5 13.2748 10.2396 13.5 10 13.5ZM16 13.5H13C12.7604 13.5 12.5 13.2748 12.5 12.9231V8.61539C12.5 8.26368 12.7604 8.03846 13 8.03846H16C16.2396 8.03846 16.5 8.26368 16.5 8.61539V12.9231C16.5 13.2748 16.2396 13.5 16 13.5ZM10 5.96154H7C6.76039 5.96154 6.5 5.73632 6.5 5.38462V1.07692C6.5 0.725217 6.76039 0.5 7 0.5H10C10.2396 0.5 10.5 0.725217 10.5 1.07692V5.38462C10.5 5.73632 10.2396 5.96154 10 5.96154ZM12.5 5.38462V1.07692C12.5 0.725217 12.7604 0.5 13 0.5H16C16.2396 0.5 16.5 0.725217 16.5 1.07692V5.38462C16.5 5.73632 16.2396 5.96154 16 5.96154H13C12.7604 5.96154 12.5 5.73632 12.5 5.38462Z"
                          fill="white"
                          stroke="#DADCDC"
                        />
                      </svg>
                    )}
                  </button>
                  {/* change view list */}
                  <button
                    onClick={() => {
                      setViewType("list");
                      slicedProducts = filteredProducts.slice(0, viewed);
                    }}
                  >
                    {viewType == "list" ? (
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.49805 9.23633H3.49805C4.04805 9.23633 4.49805 8.78633 4.49805 8.23633V6.23633C4.49805 5.68633 4.04805 5.23633 3.49805 5.23633H1.49805C0.948047 5.23633 0.498047 5.68633 0.498047 6.23633V8.23633C0.498047 8.78633 0.948047 9.23633 1.49805 9.23633ZM1.49805 14.2363H3.49805C4.04805 14.2363 4.49805 13.7863 4.49805 13.2363V11.2363C4.49805 10.6863 4.04805 10.2363 3.49805 10.2363H1.49805C0.948047 10.2363 0.498047 10.6863 0.498047 11.2363V13.2363C0.498047 13.7863 0.948047 14.2363 1.49805 14.2363ZM1.49805 4.23633H3.49805C4.04805 4.23633 4.49805 3.78633 4.49805 3.23633V1.23633C4.49805 0.686328 4.04805 0.236328 3.49805 0.236328H1.49805C0.948047 0.236328 0.498047 0.686328 0.498047 1.23633V3.23633C0.498047 3.78633 0.948047 4.23633 1.49805 4.23633ZM6.49805 9.23633H16.498C17.048 9.23633 17.498 8.78633 17.498 8.23633V6.23633C17.498 5.68633 17.048 5.23633 16.498 5.23633H6.49805C5.94805 5.23633 5.49805 5.68633 5.49805 6.23633V8.23633C5.49805 8.78633 5.94805 9.23633 6.49805 9.23633ZM6.49805 14.2363H16.498C17.048 14.2363 17.498 13.7863 17.498 13.2363V11.2363C17.498 10.6863 17.048 10.2363 16.498 10.2363H6.49805C5.94805 10.2363 5.49805 10.6863 5.49805 11.2363V13.2363C5.49805 13.7863 5.94805 14.2363 6.49805 14.2363ZM5.49805 1.23633V3.23633C5.49805 3.78633 5.94805 4.23633 6.49805 4.23633H16.498C17.048 4.23633 17.498 3.78633 17.498 3.23633V1.23633C17.498 0.686328 17.048 0.236328 16.498 0.236328H6.49805C5.94805 0.236328 5.49805 0.686328 5.49805 1.23633Z"
                          fill="#00C65E"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.32324 8.49805H1.32324C1.04938 8.49805 0.823242 8.2719 0.823242 7.99805V5.99805C0.823242 5.72419 1.04938 5.49805 1.32324 5.49805H3.32324C3.5971 5.49805 3.82324 5.72419 3.82324 5.99805V7.99805C3.82324 8.2719 3.5971 8.49805 3.32324 8.49805ZM3.32324 13.498H1.32324C1.04938 13.498 0.823242 13.2719 0.823242 12.998V10.998C0.823242 10.7242 1.04938 10.498 1.32324 10.498H3.32324C3.5971 10.498 3.82324 10.7242 3.82324 10.998V12.998C3.82324 13.2719 3.5971 13.498 3.32324 13.498ZM3.32324 3.49805H1.32324C1.04938 3.49805 0.823242 3.2719 0.823242 2.99805V0.998047C0.823242 0.724189 1.04938 0.498047 1.32324 0.498047H3.32324C3.5971 0.498047 3.82324 0.724189 3.82324 0.998047V2.99805C3.82324 3.2719 3.5971 3.49805 3.32324 3.49805ZM16.3232 8.49805H6.32324C6.04938 8.49805 5.82324 8.2719 5.82324 7.99805V5.99805C5.82324 5.72419 6.04938 5.49805 6.32324 5.49805H16.3232C16.5971 5.49805 16.8232 5.72419 16.8232 5.99805V7.99805C16.8232 8.2719 16.5971 8.49805 16.3232 8.49805ZM16.3232 13.498H6.32324C6.04938 13.498 5.82324 13.2719 5.82324 12.998V10.998C5.82324 10.7242 6.04938 10.498 6.32324 10.498H16.3232C16.5971 10.498 16.8232 10.7242 16.8232 10.998V12.998C16.8232 13.2719 16.5971 13.498 16.3232 13.498ZM5.82324 2.99805V0.998047C5.82324 0.724189 6.04938 0.498047 6.32324 0.498047H16.3232C16.5971 0.498047 16.8232 0.724189 16.8232 0.998047V2.99805C16.8232 3.2719 16.5971 3.49805 16.3232 3.49805H6.32324C6.04938 3.49805 5.82324 3.2719 5.82324 2.99805Z"
                          fill="white"
                          stroke="#DADCDC"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${viewType == "grid"
                ? "grid grid-cols-4 gap-3"
                : "flex flex-col w-full justify-start items-stretch gap-3"
                }`}
            >
              {slicedProducts &&
                slicedProducts.length > 0 &&
                slicedProducts.map((product) => {
                  return (
                    <CategoryProductCard
                      one={one}
                      setone={setone}
                      key={product.id}
                      product={product}
                      view={viewType}
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

export default OriginalCategoryProducts;
