import React from "react";
import { Link } from "react-router-dom";
import { asusVivoBook1 } from "../assets/images";

const ProductCard = () => {
  return (
    <li className="rounded-lg flex flex-col relative shadow-product-card-shadow">
      <Link className="relative w-[214px] h-[166px] flex justify-center items-center">
        <img src={asusVivoBook1} className="w-[calc(100%-40px)]" alt="" />
      </Link>
      <div className="px-4 py-2 flex flex-col items-start gap-1">
        <h3 className="text-base leading-152 text-dark-gray font-medium">
          Asus Vivobook
        </h3>
        <strong>50000</strong>
      </div>
    </li>
  );
};

export default ProductCard;
