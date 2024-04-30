import React from "react";
import { Link } from "react-router-dom";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";

const CategoryNavLinks = ({ one }) => {
  let finded = products.filter((e) => {
    e.saved === true;
  });
  return (
    <div className="my-container">
      <div className="flex relative justify-between items-center py-3">
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
    </div>
  );
};

export default CategoryNavLinks;
