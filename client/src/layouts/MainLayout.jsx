import React, { useEffect, useState } from "react";
import Header from "../components/main-components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/main-components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products, scrollTop } from "../data/data";
import CategoryNavLinks from "../components/CategoryNavLinks";
import Breadcrump from "../components/main-components/Breadcrumb";
import SrollTo from "../components/main-components/SrollTo";

const MainLayout = ({ one }) => {
  const location = useLocation();
  const home = location.pathname == "/";
  const login_location = location.pathname == "/login";
  const register_location = location.pathname == "/register";
  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  const [top, setTop] = useState(
    products.filter((e) => {
      e.saved === true;
    })
  );
  return (
    <div
      className={`flex ${
        home ? "bg-light-gray" : "bg-light-gray"
      } flex-col justify-between min-h-screen`}
    >
      {!register_location && !login_location && (
        <Header one={one} top={top} setTop={setTop} />
      )}
      {!register_location && !login_location && <CategoryNavLinks one={one} />}
      {!home && !register_location && !login_location && <Breadcrump />}
      <SrollTo />
      <main className="grow">
        <Outlet />
      </main>
      {!login_location && !register_location && <Footer />}
    </div>
  );
};

export default MainLayout;
