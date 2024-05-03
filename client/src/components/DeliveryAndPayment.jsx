import { Select } from "antd";
import React, { useState } from "react";
import DilyMap from "./DilyMap";
import cities from "../data/cities";
import daties from "../data/daties";
import times from "../data/times";

const DeliveryAndPayment = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const filterCity = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="flex flex-col gap-10 justify-start items-start">
      {/* Tab header */}
      <div className="flex justify-between items-center gap-5">
        <button
          onClick={() => {
            setActiveTab("delivery");
          }}
          className={`btn font-medium ${
            activeTab == "delivery" ? "" : "!bg-white !text-bright-green"
          }`}
        >
          Yetkazib berish
        </button>
        <button
          onClick={() => {
            setActiveTab("delivery-points");
          }}
          className={`btn font-medium ${
            activeTab == "delivery-points" ? "" : "!bg-white !text-bright-green"
          }`}
        >
          Topshirish punktlari
        </button>
      </div>
      {/* Tab body */}
      <div className="w-full">
        {activeTab == "delivery" && (
          <>
            <div className="flex justify-between w-full gap-10 items-start">
              <div className="rounded-[10px] grow flex flex-col justify-center items-start gap-30 shadow-product-card-shadow p-30">
                <div className="flex w-full flex-col justify-start items-start gap-1">
                  <label
                    htmlFor="city"
                    className="font-medium text-base leading-152 text-dark-gray"
                  >
                    Manzili:
                  </label>
                  <Select
                    id="city"
                    size="large"
                    className="w-full hover:border-bright-green"
                    showSearch
                    placeholder="Manzilni tanlang"
                    optionFilterProp="children"
                    filterOption={filterCity}
                    options={cities}
                  />
                </div>
                <div className="flex justify-between w-full gap-30 items-start">
                  <div className="flex flex-col w-full justify-start items-stretch gap-1">
                    <label
                      htmlFor="city"
                      className="font-medium text-base leading-152 text-dark-gray"
                    >
                      Kuni:
                    </label>
                    <Select
                      id="city"
                      size="large"
                      className="w-full"
                      showSearch
                      placeholder="Kunni kiriting"
                      optionFilterProp="children"
                      filterOption={filterCity}
                      options={daties}
                    />
                  </div>
                  <div className="flex flex-col w-full justify-start items-start gap-1">
                    <label
                      htmlFor="city"
                      className="font-medium text-base leading-152 text-dark-gray"
                    >
                      Vaqti:
                    </label>
                    <Select
                      id="city"
                      size="large"
                      className="w-full"
                      showSearch
                      placeholder="Vaqtni kiriting"
                      optionFilterProp="children"
                      filterOption={filterCity}
                      options={times}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-stretch flex-col p-30 rounded-[10px] shadow-product-card-shadow gap-30">
                <div className="flex justify-between items-center gap-11">
                  <p className="text-sm font-normal leading-normal text-dark-gray">
                    Yetkazib berish narxi
                  </p>
                  <b className="font-medium text-base leading-152 text-dark-gray">
                    Bepul
                  </b>
                </div>
                <div className="flex flex-col justify-start items-stretch gap-2.5">
                  <button className="btn">Sotib olish</button>
                  <p className="text-sm font-normal leading-normal text-dark-gray">
                    Onlayn karta yoki naqd pul bilan to'lash
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab == "delivery-points" && (
          <>
            <div className="flex flex-col justify-start items-stretch gap-5">
              <h4 className="text-lg font-bold leading-normal text-dark-gray">
                Mahsulotni olib ketish punktlari
              </h4>
              <div className="flex justify-between items-start gap-30">
                <div className="flex flex-col justify-between items-start gap-5">
                  <p className="text-sm font-medium leading-normal text-dark-gray">
                    Bosh ofis manzili
                  </p>
                  <p className="text-sm font-normal leading-normal text-dark-gray">
                    <b className="font-medium">Ish vaqti(har kuni):</b> 9.00 dan
                    22.00 gacha
                  </p>
                  <a
                    href="tel:+998998765432"
                    className="flex gap-2.5 items-center"
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.76938 9.53701C5.18738 7.95401 3.67338 6.12001 4.39838 5.39501C5.43538 4.35801 6.33938 3.71801 4.50038 1.43001C2.66238 -0.856989 1.43638 0.900011 0.432381 1.90501C-0.727619 3.06501 0.370381 7.38901 4.64338 11.663C8.91738 15.936 13.2414 17.031 14.4014 15.87C15.4074 14.865 17.1634 13.645 14.8764 11.807C12.5894 9.96801 11.9494 10.871 10.9114 11.91C10.1864 12.632 8.35238 11.119 6.76938 9.53701Z"
                        fill="#00C65E"
                      />
                    </svg>
                    <p className="font-medium text-sm leading-normal text-dark-gray">
                      +998 99 876 54 32
                    </p>
                  </a>
                </div>
                <div className="w-[670px] h-[405px] sceleton-animation">
                  <DilyMap />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
