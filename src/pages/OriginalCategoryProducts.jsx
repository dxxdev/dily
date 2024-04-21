import React from "react";
import { useLocation } from "react-router-dom";

const OriginalCategoryProducts = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").slice(1).pop();
  return (
    <div className="my-container">
      <div className="flex flex-col justify-center items-start gap-30">
        <div className="flex flex-col justify-between items-start gap-5">
          <h2 className="text-3xl font-bold leading-120 text-dark-gray">
            {pathname}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OriginalCategoryProducts;
