import React, { useState } from "react";
import { Link } from "react-router-dom";
import { options } from "../data/data";

const ProductCard = ({ product, widthFixed, discount }) => {
  const [rendered, setRendered] = useState(false);
  const liked = (product) => {
    product.saved = !product.saved;
    setRendered((prev) => !prev);
  };
  return (
    <li
    key={product.id}
      className={`rounded-lg group bg-white/90 flex flex-col relative shadow-product-card-shadow ${
        widthFixed ? "w-52" : ""
      }`}
    >
      <button
        className="absolute top-3 right-3 z-[999]"
        onClick={() => liked(product)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 22 21"
          fill={product?.saved ? "#00C65E" : "none"}
        >
          <path
            d="M11.62 19.2998C11.28 19.4198 10.72 19.4198 10.38 19.2998C7.48 18.3098 1 14.1798 1 7.17984C1 4.08984 3.49 1.58984 6.56 1.58984C8.38 1.58984 9.99 2.46984 11 3.82984C12.01 2.46984 13.63 1.58984 15.44 1.58984C18.51 1.58984 21 4.08984 21 7.17984C21 14.1798 14.52 18.3098 11.62 19.2998Z"
            stroke="#00C65E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Link
        to={`/products/${product?.category?.name}/${product?.category?.originalCategory}/${product?.id}`}
        className="relative w-full aspect-square flex justify-center items-center"
      >
        <img
          src={product?.images[0]}
          className="w-[calc(100%-40px)] group-hover:scale-110 transition-all"
          alt=""
        />
      </Link>
      <div className="px-4 py-2 flex flex-col items-start gap-1">
        <h3 className="text-base leading-152 text-dark-gray font-medium">
          {product?.productName}
        </h3>
        <strong className="text-bright-green font-bold leading-normal tracking-0.5">
          {!discount &&
            product
              ?.price()
              .toLocaleString("uz-UZ", options)
              .replaceAll(",", " ")}
          {discount &&
            product
              ?.discountPrice()
              .toLocaleString("uz-UZ", options)
              .replaceAll(",", " ")}{" "}
          ${" "}
          <del className={`${discount ? "text-dark-gray-2" : ""}`}>
            {discount &&
              product
                ?.price()
                .toLocaleString("uz-UZ", options)
                .replaceAll(",", " ")}{" "}
            $
          </del>
        </strong>
        <address className="not-italic text-address-gray font-normal text-xs">
          {product?.address}
        </address>
        <div className="rounded-full absolute bottom-3 right-3 cursor-pointer">
          <Link>
            <img src={product?.avatar} alt="" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
