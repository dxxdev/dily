import React from "react";
import { ServisesRepairData } from "../data/ServisesPageData";
import { Link, useParams } from "react-router-dom";

const ServisesRepairDetail = () => {
  const { title } = useParams();
  const findData = ServisesRepairData.find((e) => e.title === title);
  return (
    <section className="pt-12">
      <div className="pt-10 pb-24 shadow-product-card-shadow bg-gradient-to-l from-[#F89358]/[100%] via-[#F893580A]/[4%] to-opacity-25">
        <div className="my-container flex items-center justify-between">
          <div className="w-full max-w-[440px]">
            <h1 className="font-bold text-4xl leading-[56px] text-dark-gray mb-11">
              {findData.title} ta'mirlash
            </h1>
            <h4 className="font-medium text-2xl leading-9 tracking-[0.5px] mb-[120px] text-dark-gray">
              {findData.text}
            </h4>
            <Link className="py-3 px-9 rounded-10 bg-#00C65E text-white font-medium text-sm leading-4">
              Arizangizni yuboring
            </Link>
          </div>
          <img
            className="w-full max-w-[620px]"
            src={findData.detailImg === "" ? findData.img : findData.detailImg}
            alt=""
          />
        </div>
      </div>
      <div className="my-container !py-10">
        <h2 className="font-bold text-4xl leading-10 text-dark-gray text-center mb-30">
          Modellar
        </h2>
        <ul className="flex items-center space-x-8 justify-center">
          <li
            className={`w-full max-w-[170px] py-3.5 px-3 shadow-product-card-shadow rounded-10 ${
              findData.model1 === "" ? "hidden" : ""
            }`}
          >
            <img src={findData.modelImg1} alt="" />
            <p className="text-center mt-4 text-dark-gray">{findData.model1}</p>
          </li>
          <li
            className={`w-full max-w-[170px] py-3.5 px-3 shadow-product-card-shadow rounded-10 ${
              findData.model2 === "" ? "hidden" : ""
            }`}
          >
            <img src={findData.modelImg2} alt="" />
            <p className="text-center mt-4 text-dark-gray">{findData.model2}</p>
          </li>
          <li
            className={`w-full max-w-[170px] py-3.5 px-3 shadow-product-card-shadow rounded-10 ${
              findData.model3 === "" ? "hidden" : ""
            }`}
          >
            <img src={findData.modelImg3} alt="" />
            <p className="text-center mt-4 text-dark-gray">{findData.model3}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServisesRepairDetail;
