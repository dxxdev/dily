import React, { useState } from "react";
import { Link } from "react-router-dom";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";
import CategoryMenu from "../additions/CategoryMenu";
import searchingProducts from "../functions/searchedProducts";
const CategoryNavLinks = ({ one }) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className="my-container fixed bottom-0 bg-light-gray z-[9999] sm:z-10 sm:static">
        <div className="flex relative justify-between items-center py-3">
          <div className="flex items-center gap-10">
            {/* Button to open the menu of links of all categories */}
            <button
              onClick={() => {
                setOpened((prev) => !prev);
              }}
              className="p-1 hidden sm:block bg-light-gray rounded transition-all hover:bg-bright-green/30"
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
            {/* Button to open the menu of links of all categories */}

            {/* Links of all categories */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-10">
                {filteredCategoryMenuItems(filteredCategory(products))
                  .slice(0, 2)
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
            {/* Links of all categories */}
          </div>
          <label
            htmlFor="search"
            className="w-1/2 h-11 hidden rounded-full bg-white sm:flex items-center pl-5 justify-between overflow-hidden"
          >
            {/* Search input */}
            <input
              type="text"
              autoComplete="off"
              placeholder="Nima sotib olmoqchisiz ?"
              className="outline-none w-full h-full"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  let searchedProducts = searchingProducts(e.target.value);
                  if (searchedProducts) {
                    console.log(searchedProducts);
                    console.log(e.target.value);
                  } else {
                    console.log("Product not found");
                  }

                  window.location.href = `/search?q=${e.target.value}`;
                }
              }}
              id="search"
            />
            {/* Search input */}

            {/* Search button */}
            <button
              onClick={(e) => {
                let target = e.target;
                while (target.tagName !== "BUTTON") {
                  target = target.parentElement;
                }
                const inputValue = target.parentElement.children[0].value;
                console.log(inputValue);
                let searchedProducts = searchingProducts(inputValue);
                if (searchedProducts) {
                  console.log(searchedProducts);
                  console.log(inputValue);
                } else {
                  console.log("Product not found");
                }
                window.location.href = `/search?q=${inputValue}`;
              }}
              className="w-1/4 bg-bright-green h-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 mx-7 h-5"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
            {/* Search button */}
          </label>

          <div className="hidden sm:flex space-x-3 items-center">
            {/* Link of Admin Dashboard */}
            <Link
              to={"/dash"}
              className="bg-bright-green hidden xl:flex p-2 rounded-full space-x-3 text-white items-center"
            >
              <svg
                width="20"
                height="20"
                className="mr-3 ml-1"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36 2C36 0.89543 36.8954 0 38 0H44C45.1046 0 46 0.895431 46 2V44C46 45.1046 45.1046 46 44 46H38C36.8954 46 36 45.1046 36 44V2ZM14 18C12.8954 18 12 18.8954 12 20V44C12 45.1046 12.8954 46 14 46H20C21.1046 46 22 45.1046 22 44V20C22 18.8954 21.1046 18 20 18H14ZM2 33C0.895431 33 0 33.8954 0 35V44C0 45.1046 0.89543 46 2 46H8C9.10457 46 10 45.1046 10 44V35C10 33.8954 9.10457 33 8 33H2ZM26 25C24.8954 25 24 25.8954 24 27V44C24 45.1046 24.8954 46 26 46H32C33.1046 46 34 45.1046 34 44V27C34 25.8954 33.1046 25 32 25H26Z"
                  fill="white"
                />
              </svg>
              my dash
            </Link>
            {/* Link of Admin Dashboard */}
            {/* A link to the saved page */}
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
            {/* A link to the saved page */}
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
          <nav className="flex w-full sm:hidden justify-between items-end">
            <Link className="group flex flex-col justify-center items-center gap-1">
              <span>
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="group-hover:fill-bright-green/70 fill-bright-green transition-all"
                    d="M16.2609 0C15.6606 0 15.1739 0.486649 15.1739 1.08696V2.04205L14.1529 1.02102C13.5162 0.384298 12.4839 0.384298 11.8471 1.02102L0.977544 11.8906C0.340819 12.5273 0.340819 13.5597 0.977544 14.1964C1.59273 14.8116 2.57722 14.8324 3.21739 14.2588V23.9131C3.21739 24.5133 3.70404 25 4.30435 25H10.8261C11.4264 25 11.9131 24.5133 11.9131 23.9131V18.4783H14.087V23.9131C14.087 24.5133 14.5736 25 15.1739 25H21.6957C22.2959 25 22.7827 24.5133 22.7827 23.9131V14.2588C23.4229 14.8324 24.4072 14.8116 25.0224 14.1964C25.6592 13.5597 25.6592 12.5273 25.0224 11.8906L21.6957 8.5638V1.08696C21.6957 0.486649 21.209 0 20.6087 0H16.2609ZM19.5218 6.38988V2.17392H17.3478V4.21596L19.5218 6.38988ZM13 4.4797L20.6087 12.0884V22.8261H16.2609V17.3913C16.2609 16.791 15.7742 16.3044 15.1739 16.3044H10.8261C10.2258 16.3044 9.73914 16.791 9.73914 17.3913V22.8261H5.39131V12.0884L13 4.4797Z"
                  />
                </svg>
              </span>
              <span className="text-xs font-bold text-gray-900 group-hover:text-gray-600">
                Uy
              </span>
            </Link>
            <Link className="group flex flex-col justify-center items-center gap-1">
              <span>
                <svg
                  width="30"
                  height="25"
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="group-hover:fill-bright-green/70 fill-bright-green transition-all"
                    d="M9.84145 18.029C13.918 18.029 17.2225 14.7245 17.2225 10.648C17.2225 6.57151 13.918 3.26689 9.84145 3.26689C5.76499 3.26689 2.46037 6.57151 2.46037 10.648C2.46037 14.7245 5.76499 18.029 9.84145 18.029ZM9.84145 20.4894C12.1157 20.4894 14.2097 19.718 15.8763 18.4226L22.0935 24.6398C22.574 25.1202 23.3528 25.1202 23.8333 24.6398C24.3136 24.1593 24.3136 23.3806 23.8333 22.9001L17.6161 16.6828C18.9115 15.0163 19.6829 12.9223 19.6829 10.648C19.6829 5.21269 15.2768 0.806519 9.84145 0.806519C4.40617 0.806519 0 5.21269 0 10.648C0 16.0833 4.40617 20.4894 9.84145 20.4894ZM20.8065 4.67749C20.272 4.67749 19.8387 5.11076 19.8387 5.64523C19.8387 6.17969 20.272 6.61297 20.8065 6.61297H29.0323C29.5667 6.61297 30 6.17969 30 5.64523C30 5.11076 29.5667 4.67749 29.0323 4.67749H20.8065ZM21.2903 9.5162C20.7558 9.5162 20.3226 9.94947 20.3226 10.4839C20.3226 11.0184 20.7558 11.4517 21.2903 11.4517H29.0323C29.5667 11.4517 30 11.0184 30 10.4839C30 9.94947 29.5667 9.5162 29.0323 9.5162H21.2903ZM20.8065 13.871C20.272 13.871 19.8387 14.3043 19.8387 14.8388C19.8387 15.3733 20.272 15.8065 20.8065 15.8065H29.0323C29.5667 15.8065 30 15.3733 30 14.8388C30 14.3043 29.5667 13.871 29.0323 13.871H20.8065Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="text-xs font-bold text-gray-900 group-hover:text-gray-600">
                Qidiruv
              </span>
            </Link>
            <Link className="group flex flex-col justify-center items-center gap-1">
              <span>
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="group-hover:fill-bright-green/70 fill-bright-green transition-all"
                    d="M10 6.5C11.3807 6.5 12.5 5.38074 12.5 4C12.5 2.61926 11.3807 1.5 10 1.5C8.61929 1.5 7.5 2.61926 7.5 4C7.5 5.38074 8.61929 6.5 10 6.5ZM10 8C12.2091 8 14 6.20911 14 4C14 1.79089 12.2091 0 10 0C7.79086 0 6 1.79089 6 4C6 6.20911 7.79086 8 10 8ZM19 19H20C20 13.4772 15.5229 9 10 9C4.47714 9 0 13.4772 0 19H1H1.5H18.5H19ZM18.3681 17.5C17.6596 13.521 14.1826 10.5 10 10.5C5.81738 10.5 2.34039 13.521 1.63193 17.5H18.3681Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="text-xs font-bold text-gray-900 group-hover:text-gray-600">
                Hisob
              </span>
            </Link>
            <Link className="group flex flex-col justify-center items-center gap-1">
              <span>
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1625 11.8772C15.1625 11.8772 17.1898 9.61802 16.1183 6.40357C15.3699 4.15831 14.1938 2.98363 11.9485 2.23521C10.3609 1.70599 7.66319 2.23521 7.66319 2.23521C7.66319 2.23521 8.61795 3.18913 10.7609 5.33209C12.9039 7.47506 10.7609 9.61802 10.7609 9.61802L8.61795 11.761C8.61795 11.761 6.47499 13.9039 4.33203 11.761C2.18907 9.61802 1.23521 8.66319 1.23521 8.66319C1.23521 8.66319 0.705992 11.3609 1.23521 12.9485C1.98363 15.1938 3.25908 16.5358 5.52053 17.2338C8.61795 18.1899 10.8772 16.2374 10.8772 16.1625M15.1625 11.8772C15.1625 11.8772 27.9046 24.6188 30.0476 26.7617C32.1905 28.9047 30.0476 31.0476 30.0476 31.0476C30.0476 31.0476 27.9046 33.1906 25.7616 31.0476C23.6187 28.9047 10.8772 16.1625 10.8772 16.1625M15.1625 11.8772L10.8772 16.1625"
                    className="stroke-bright-green transition-all group-hover:stroke-bright-green/70"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.8375 11.2722C20.8375 11.2722 18.8102 8.92272 19.8817 5.57971C20.6301 3.24464 21.8062 2.02297 24.0515 1.24461C25.6391 0.694232 28.3368 1.24461 28.3368 1.24461C28.3368 1.24461 27.382 2.23669 25.2391 4.46537C23.0961 6.69405 25.2391 8.92272 25.2391 8.92272L27.382 11.1514C27.382 11.1514 29.525 13.3801 31.668 11.1514C33.8109 8.92272 34.7648 7.9297 34.7648 7.9297C34.7648 7.9297 35.294 10.7353 34.7648 12.3864C34.0164 14.7215 32.7409 16.1172 30.4795 16.8432C27.382 17.8374 25.1228 15.8069 25.1228 15.729M20.8375 11.2722C20.8375 11.2722 8.09539 24.5235 5.95243 26.7521C3.80947 28.9808 5.95243 31.2095 5.95243 31.2095C5.95243 31.2095 8.09539 33.4382 10.2384 31.2095C12.3813 28.9808 25.1228 15.729 25.1228 15.729M20.8375 11.2722L25.1228 15.729"
                    className="stroke-bright-green transition-all group-hover:stroke-bright-green/70"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs font-bold text-gray-900 group-hover:text-gray-600">
                Xizmatlar
              </span>
            </Link>

            <Link
              to={`/saved`}
              className="group flex flex-col justify-center items-center gap-1"
            >
              <span className="relative">
                <span className="absolute text-start bg-bright-green h-5 w-5 text-xs rounded-full flex items-center justify-center text-white font-open-sans -top-2 -right-2">
                  {one}
                </span>
                <svg
                  width="25"
                  height="23"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-bright-green transition-all group-hover:stroke-bright-green/70"
                    d="M9.67912 3.32995L10.0146 3.84812L10.3505 3.33023C11.866 0.993741 13.992 0.52207 15.7195 1.18566C17.4723 1.859 18.8959 3.73126 18.8959 6.26055C18.8959 7.15144 18.424 8.22616 17.629 9.3879C16.8423 10.5377 15.7777 11.718 14.6763 12.8092C13.5767 13.8987 12.4502 14.8899 11.5456 15.6622C11.2206 15.9397 10.9256 16.1878 10.67 16.4027C10.5695 16.4873 10.475 16.5667 10.3873 16.6408C10.2468 16.7593 10.12 16.867 10.0126 16.9603C9.90021 16.8652 9.76694 16.7559 9.6197 16.6361C9.49306 16.5331 9.35398 16.4208 9.20326 16.299C8.96689 16.1081 8.70191 15.894 8.41147 15.6567C7.46565 14.8839 6.28425 13.8924 5.12959 12.8025C3.97308 11.7108 2.85387 10.5302 2.02655 9.38019C1.18978 8.21706 0.695898 7.14523 0.695898 6.26055C0.695898 3.72623 2.21543 1.84788 4.08588 1.17315C5.93765 0.505166 8.17251 1.00277 9.67912 3.32995Z"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="text-xs font-bold text-gray-900 group-hover:text-gray-600">
                Saqlanganlar
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default CategoryNavLinks;
