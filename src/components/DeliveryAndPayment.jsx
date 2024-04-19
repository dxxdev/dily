import { Select } from "antd";
import React, { useState } from "react";
import { cities } from "../data/cities";

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
      <div>
        {activeTab == "delivery" && (
          <>
            <div className="flex justify-between gap-10 items-start">
              <div className="rounded-[10px] flex flex-col justify-center items-center gap-30 shadow-product-card-shadow p-30">
                <div className="flex flex-col justify-center items-start gap-1">
                  <label
                    htmlFor="city"
                    className="font-medium text-base leading-152 text-dark-gray"
                  >
                    Yetkazib berish manzili:
                  </label>
                  <Select
                    id="city"
                    size="large"
                    className="w-full"
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={filterCity}
                    options={cities}
                  />
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
