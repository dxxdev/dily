import { Select } from "antd";
import React, { useState } from "react";
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
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
