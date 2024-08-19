import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrump = () => {
  const location = useLocation();
  const pathe = location.pathname.replaceAll("%20", " ");
  location.pathname = pathe;
  const path = location.pathname.split("/");
  const filterArr = path.filter(
    (path) =>
      path !== "" && path !== "sotib-olish" && path !== "sale" && path !== "car"
  );
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="flex space-x-5 vercel my-5  w-full max-w-7xl mx-auto px-5">
        <li>
          <Link to={"/"} className="text-bright-green">
            Bosh sahifa
          </Link>
        </li>

        {filterArr.map((path, index) => {
          return (
            <li key={index}>
              {index !== filterArr.length - 1 ? (
                <Link className="text-bright-green" to={path}>
                  {`${path}`}
                </Link>
              ) : (
                path
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrump;