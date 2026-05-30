import React from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../../data/data";
import filteredById from "../../functions/filteredById";

const Breadcrump = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  const skipNames = ["sotib-olish", "sale", "car", "login", "products"];

  // Filter out skipped names but keep track of the original index for path building
  const breadcrumbItems = pathnames.reduce((acc, value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    if (!skipNames.includes(value)) {
      acc.push({ value, to, index });
    }
    return acc;
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <ul className="flex space-x-5 vercel my-5  w-full max-w-7xl mx-auto px-5">
        <li>
          <Link to={"/"} className="text-bright-green">
            Bosh sahifa
          </Link>
        </li>

        {breadcrumbItems.map((item, i) => {
          const isLast = i === breadcrumbItems.length - 1;
          let displayName = decodeURIComponent(item.value);
          
          // If it's the last item and it looks like an ID, try to get product name
          if (isLast && !isNaN(item.value) && item.value.trim() !== "") {
            const product = filteredById(products, item.value)[0];
            if (product) {
              displayName = product.productName;
            }
          }

          return (
            <li key={item.to} className="flex items-center gap-5">
              <span className="text-dark-gray/30">/</span>
              {!isLast ? (
                <Link className="text-bright-green hover:underline" to={item.to}>
                  {displayName}
                </Link>
              ) : (
                <span className="text-dark-gray font-medium">{displayName}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrump;