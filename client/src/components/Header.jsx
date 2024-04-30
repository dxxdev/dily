import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products, saved } from "../data/data";
import CategoryMenu from "../additions/CategoryMenu";
import { logo } from "../assets/images";
import bildrishnoma from "../functions/bildrishnoma";

const Header = ({ top, setTop, one }) => {
  const [opened, setOpened] = useState(false);
  let finded = products.filter((e) => {
    e.saved === true;
  });
  return (
    <header className="bg-light-gray/80 backdrop-blur-md shadow-sm sticky top-0 z-[999]">
      <div className="my-container">
        <div className="flex w-full items-center justify-between">
          <Link>
            <h1 className="flex items-center gap-1 h-30 font-open-sans">
              <img src={logo} alt="" className="h-full" />
            </h1>
          </Link>
          <div className="w-full max-w-xs rounded-full bg-white flex flex-col justify-start items-start">
            <div className="flex justify-between items-center w-full">
              <div className="flex w-full px-4 items-center gap-4">
                <span className="w-3 aspect-square flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="outline-none text-xs py-2 w-full"
                  placeholder="Nima sotib olmoqchisiz?"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setOpened((prev) => !prev);
            }}
            className="p-1 z-[99999] bg-light-gray rounded transition-all hover:bg-bright-green/30"
          >
            {opened ? (
              <svg
                width="14"
                height="15"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.906152 8.60877C0.39847 9.11645 0.39847 9.93957 0.906152 10.4472C1.41383 10.9549 2.23695 10.9549 2.74463 10.4472L5.8559 7.33598L8.96717 10.4472C9.47485 10.9549 10.298 10.9549 10.8056 10.4472C11.3133 9.93957 11.3133 9.11645 10.8057 8.60877L7.69438 5.4975L10.8056 2.38623C11.3133 1.87855 11.3133 1.05544 10.8056 0.547754C10.298 0.0400722 9.47485 0.0400715 8.96717 0.547753L5.8559 3.65902L2.74463 0.547753C2.23695 0.0400715 1.41384 0.0400722 0.906156 0.547754C0.398474 1.05544 0.398474 1.87855 0.906155 2.38623L4.01742 5.4975L0.906152 8.60877Z"
                  fill="#00C65E"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                className="rotate-180"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.000270024 1.3C0.000270024 0.58203 0.5823 0 1.30027 0H12.7003C13.4182 0 14.0003 0.58203 14.0003 1.3C14.0003 2.01797 13.4182 2.6 12.7003 2.6H1.30027C0.582299 2.6 0.000270024 2.01797 0.000270024 1.3ZM0 7.49727C0 6.7793 0.58203 6.19727 1.3 6.19727H12.7C13.418 6.19727 14 6.7793 14 7.49727C14 8.21524 13.418 8.79727 12.7 8.79727H1.3C0.582029 8.79727 0 8.21524 0 7.49727ZM1.3 12.3945C0.58203 12.3945 0 12.9766 0 13.6945C0 14.4125 0.58203 14.9945 1.3 14.9945H6.7C7.41797 14.9945 8 14.4125 8 13.6945C8 12.9766 7.41797 12.3945 6.7 12.3945H1.3Z"
                  fill="#363A45"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {opened && (
        <div
          onClick={() => {
            setOpened(false);
          }}
          className="fixed top-0 left-0 w-full h-screen z-[9999] bg-black/10"
        >
          <div className="my-container">
            <CategoryMenu opened={opened} setOpened={setOpened} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
