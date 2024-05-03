import React, { useState } from "react";
import { Link } from "react-router-dom";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";
import CategoryMenu from "../additions/CategoryMenu";
import ProductCard from "./ProductCard";
const CategoryNavLinks = ({ one }) => {
  const [opened, setOpened] = useState(false);
  const [searching, setSearching] = useState("");
  return (
    <>
      <div className="my-container">
        <div className="flex relative justify-between items-center py-3">
          <div className="flex items-center gap-10">
            <button
              onClick={() => {
                setOpened((prev) => !prev);
              }}
              className="p-1  bg-light-gray rounded transition-all hover:bg-bright-green/30"
            >
              {opened ? (
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="scale-150"
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
                  className="scale-150"
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

            <nav>
              <ul className="flex items-center gap-10">
                {filteredCategoryMenuItems(filteredCategory(products))
                  .slice(0, 6)
                  .map((category) => {
                    return (
                      <li key={category.id}>
                        <Link to={`/products/${category.name}`}>
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>
          </div>
          <label
            htmlFor="search"
            className="w-1/2 h-11 rounded-full bg-white flex items-center pl-5 justify-between overflow-hidden"
          >
            <input
              type="text"
              autoComplete="off"
              placeholder="Nima sotib olmoqchisiz ?"
              className="outline-none w-full h-full"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
              id="search"
            />

            <button className="w-1/4 bg-bright-green h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 mx-7 h-5"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </label>

          <div className="flex space-x-3 items-center">
            <Link
              to={"/dash"}
              className="bg-bright-green py-1 px-2 rounded-full flex space-x-3 text-white items-center"
            >
              <i className="bx bxs-dashboard text-2xl mr-1"></i> my dash
            </Link>
            <Link
              to={`/saved`}
              className="transition-all relative hover:bg-light-green/50  p-1 rounded-sm"
            >
              <span className="absolute text-start bg-bright-green h-5 w-5 text-xs rounded-full flex items-center justify-center text-white font-open-sans -top-2 -right-2">
                {one}
              </span>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.67912 3.32995L10.0146 3.84812L10.3505 3.33023C11.866 0.993741 13.992 0.52207 15.7195 1.18566C17.4723 1.859 18.8959 3.73126 18.8959 6.26055C18.8959 7.15144 18.424 8.22616 17.629 9.3879C16.8423 10.5377 15.7777 11.718 14.6763 12.8092C13.5767 13.8987 12.4502 14.8899 11.5456 15.6622C11.2206 15.9397 10.9256 16.1878 10.67 16.4027C10.5695 16.4873 10.475 16.5667 10.3873 16.6408C10.2468 16.7593 10.12 16.867 10.0126 16.9603C9.90021 16.8652 9.76694 16.7559 9.6197 16.6361C9.49306 16.5331 9.35398 16.4208 9.20326 16.299C8.96689 16.1081 8.70191 15.894 8.41147 15.6567C7.46565 14.8839 6.28425 13.8924 5.12959 12.8025C3.97308 11.7108 2.85387 10.5302 2.02655 9.38019C1.18978 8.21706 0.695898 7.14523 0.695898 6.26055C0.695898 3.72623 2.21543 1.84788 4.08588 1.17315C5.93765 0.505166 8.17251 1.00277 9.67912 3.32995Z"
                  stroke="#363A45"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>

          {/* catalog menu item */}
          {opened && (
            <div
              onClick={() => {
                setOpened(false);
              }}
              className="fixed top-0 left-0 w-full h-full z-[9999] bg-black/10"
            >
              <div className="my-container">
                <CategoryMenu opened={opened} setOpened={setOpened} />
              </div>
            </div>
          )}
        </div>

        {searching.trim() !== "" && <div className="w-full h-full absolute bg-white left-0 z-[999]">
          <div className="my-container grid grid-cols-4 gap-12 my-10">
            {
              products.map(product => {
                if (product.productName.toLowerCase().includes(searching.toLowerCase())) {
                  return <ProductCard product={product} />
                }
              }
              )
            }
          </div>
        </div>}

      </div>
    </>
  );
};

export default CategoryNavLinks;
