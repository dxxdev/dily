import React, { useState } from "react";
import { Link } from "react-router-dom";
import { options, saved } from "../data/data";

const CategoryProductCard = ({ product, view, one, setone }) => {
  const [rendered, setRendered] = useState(false);
  const liked = (product) => {
    product.saved = !product.saved;
    setRendered((prev) => !prev);
    if (!saved.includes(product) && product.saved === false) {
      setone(one - 1)
    } else {
      setone(one + 1)
    }
  };
  return (
    <li
      className={`rounded-lg bg-white/90 ${
        view == "grid" ? "flex flex-col w-52" : "flex"
      } relative shadow-product-card-shadow`}
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
        className={`relative ${view == "grid" ? "w-full" : "w-56"
          } aspect-square flex justify-center items-center`}
      >
        <img
          src={product?.images[0]}
          className="w-[calc(100%-40px)] hover:scale-110 transition-all"
          alt=""
        />
      </Link>
      <div className="px-4 py-2 flex w-full flex-col justify-between items-start gap-2.5">
        <h3
          className={`${view == "grid" ? "text-base" : "text-2xl"
            } leading-152 text-dark-gray font-medium`}
        >
          {product?.productName}
        </h3>
        <div className={`flex justify-between items-center gap-4 w-full`}>
          <strong
            className={`text-bright-green font-bold leading-normal tracking-0.5 ${view == "grid" ? "text-base" : "text-xl"
              }`}
          >
            {product
              ?.price()
              .toLocaleString("uz-UZ", options)
              .replaceAll(",", " ")}{" "}
            $
          </strong>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              <p
                className={`${view == "grid" ? "text-xs" : "text-base"
                  } leading-140 text-dark-gray font-medium`}
              >
                {product?.rating}
              </p>
              <svg
                width={`${view == "grid" ? "12" : 16}`}
                height={`${view == "grid" ? "12" : 16}`}
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.47035 0.756545C5.68474 0.109797 6.61586 0.109797 6.82953 0.756545L7.59416 3.06827C7.64087 3.20905 7.73168 3.33173 7.85361 3.41875C7.97553 3.50577 8.12234 3.55269 8.27303 3.5528H10.747C11.4394 3.5528 11.7267 4.42356 11.1672 4.82382L9.16628 6.25215C9.04411 6.33924 8.95313 6.46212 8.90641 6.60315C8.85968 6.74419 8.85959 6.89615 8.90617 7.03723L9.67079 9.34895C9.88517 9.9957 9.13127 10.5343 8.5703 10.134L6.56941 8.70572C6.44736 8.61864 6.30041 8.57175 6.14959 8.57175C5.99876 8.57175 5.85181 8.61864 5.72976 8.70572L3.72887 10.134C3.16862 10.5343 2.41543 9.9957 2.62909 9.34895L3.39372 7.03723C3.44029 6.89615 3.44021 6.74419 3.39348 6.60315C3.34675 6.46212 3.25578 6.33924 3.1336 6.25215L1.13343 4.82453C0.573893 4.42426 0.861878 3.5535 1.55361 3.5535H4.02686C4.17767 3.55354 4.32463 3.50669 4.4467 3.41966C4.56877 3.33262 4.65969 3.20987 4.70644 3.06897L5.47107 0.757247L5.47035 0.756545Z"
                  fill="#363A45"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center gap-1">
              <svg
                width={`${view == "grid" ? "12" : 16}`}
                height={`${view == "grid" ? "12" : 16}`}
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.462891 4.27148C0.462891 2.06598 2.70589 0.271484 5.46289 0.271484C8.21989 0.271484 10.4629 2.06598 10.4629 4.27148C10.4629 6.43148 8.31139 8.19748 5.63289 8.26898L2.96289 10.2715V7.73848C1.41189 7.02948 0.462891 5.72548 0.462891 4.27148Z"
                  fill="#363A45"
                />
              </svg>
              <p
                className={`${view == "grid" ? "text-xs" : "text-base"
                  } leading-140 text-dark-gray font-medium`}
              >
                {product?.comments.length}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex w-full ${view == "grid" ? "justify-stretch" : "justify-end"
            }`}
        >
          <button
            className={`flex group transition-all rounded-[10px] justify-center bg-white hover:bg-bright-green text-dark-gray hover:text-white items-center gap-5 py-2 px-4 shadow-product-card-shadow ${view == "grid" ? "w-full" : "w-max"
              }`}
          >
            <span className={`${view == "grid" ? "block" : "hidden"}`}>
              Sotib olish
            </span>
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.60482 0.271484C1.41696 0.271484 1.23679 0.346112 1.10395 0.478951C0.971112 0.611789 0.896484 0.791956 0.896484 0.979818C0.896484 1.16768 0.971112 1.34785 1.10395 1.48068C1.23679 1.61352 1.41696 1.68815 1.60482 1.68815H1.95332C2.10713 1.68842 2.25667 1.73874 2.37935 1.83152C2.50203 1.92429 2.59117 2.05448 2.63332 2.2024L4.88015 10.0649C5.00723 10.5086 5.27532 10.8989 5.64388 11.1767C6.01244 11.4545 6.46144 11.6048 6.92298 11.6048H13.3957C13.8205 11.6049 14.2356 11.4777 14.5873 11.2395C14.9391 11.0014 15.2114 10.6633 15.3692 10.2689L17.4573 5.04707C17.5432 4.8322 17.5751 4.59957 17.5502 4.36952C17.5254 4.13947 17.4446 3.919 17.3149 3.72738C17.1852 3.53577 17.0106 3.37884 16.8062 3.27031C16.6019 3.16178 16.374 3.10496 16.1427 3.10482H4.36448L3.99473 1.81282C3.86798 1.36908 3.60022 0.978665 3.23192 0.700588C2.86362 0.422511 2.41481 0.271887 1.95332 0.271484H1.60482ZM6.24298 9.6739L4.76965 4.52148H16.1412L14.0531 9.74332C14.0004 9.87462 13.9097 9.98717 13.7926 10.0664C13.6754 10.1457 13.5372 10.1881 13.3957 10.1882H6.92298C6.76918 10.1879 6.61963 10.1376 6.49695 10.0448C6.37427 9.95201 6.28513 9.82182 6.24298 9.6739Z"
                  fill="currentColor"
                  className="fill-dark-gray group-hover:fill-white transition-all"
                />
                <path
                  d="M7.27148 17.2715C7.55054 17.2715 7.82687 17.2165 8.08469 17.1097C8.3425 17.0029 8.57676 16.8464 8.77409 16.6491C8.97141 16.4518 9.12794 16.2175 9.23473 15.9597C9.34152 15.7019 9.39648 15.4255 9.39648 15.1465C9.39648 14.8674 9.34152 14.5911 9.23473 14.3333C9.12794 14.0755 8.97141 13.8412 8.77409 13.6439C8.57676 13.4466 8.3425 13.29 8.08469 13.1832C7.82687 13.0764 7.55054 13.0215 7.27148 13.0215C6.7079 13.0215 6.1674 13.2454 5.76888 13.6439C5.37037 14.0424 5.14648 14.5829 5.14648 15.1465C5.14648 15.7101 5.37037 16.2506 5.76888 16.6491C6.1674 17.0476 6.7079 17.2715 7.27148 17.2715ZM7.27148 15.8548C7.08362 15.8548 6.90346 15.7802 6.77062 15.6474C6.63778 15.5145 6.56315 15.3343 6.56315 15.1465C6.56315 14.9586 6.63778 14.7785 6.77062 14.6456C6.90346 14.5128 7.08362 14.4382 7.27148 14.4382C7.45935 14.4382 7.63951 14.5128 7.77235 14.6456C7.90519 14.7785 7.97982 14.9586 7.97982 15.1465C7.97982 15.3343 7.90519 15.5145 7.77235 15.6474C7.63951 15.7802 7.45935 15.8548 7.27148 15.8548Z"
                  fill="currentColor"
                  className="fill-dark-gray group-hover:fill-white transition-all"
                />
                <path
                  d="M12.9385 17.2715C13.2175 17.2715 13.4939 17.2165 13.7517 17.1097C14.0095 17.0029 14.2438 16.8464 14.4411 16.6491C14.6384 16.4518 14.7949 16.2175 14.9017 15.9597C15.0085 15.7019 15.0635 15.4255 15.0635 15.1465C15.0635 14.8674 15.0085 14.5911 14.9017 14.3333C14.7949 14.0755 14.6384 13.8412 14.4411 13.6439C14.2438 13.4466 14.0095 13.29 13.7517 13.1832C13.4939 13.0764 13.2175 13.0215 12.9385 13.0215C12.3749 13.0215 11.8344 13.2454 11.4359 13.6439C11.0374 14.0424 10.8135 14.5829 10.8135 15.1465C10.8135 15.7101 11.0374 16.2506 11.4359 16.6491C11.8344 17.0476 12.3749 17.2715 12.9385 17.2715ZM12.9385 15.8548C12.7506 15.8548 12.5704 15.7802 12.4376 15.6474C12.3048 15.5145 12.2301 15.3343 12.2301 15.1465C12.2301 14.9586 12.3048 14.7785 12.4376 14.6456C12.5704 14.5128 12.7506 14.4382 12.9385 14.4382C13.1263 14.4382 13.3065 14.5128 13.4393 14.6456C13.5722 14.7785 13.6468 14.9586 13.6468 15.1465C13.6468 15.3343 13.5722 15.5145 13.4393 15.6474C13.3065 15.7802 13.1263 15.8548 12.9385 15.8548Z"
                  fill="currentColor"
                  className="fill-dark-gray group-hover:fill-white transition-all"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CategoryProductCard;
