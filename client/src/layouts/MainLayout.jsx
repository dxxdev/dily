import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products, scrollTop } from "../data/data";
import CategoryNavLinks from "../components/CategoryNavLinks";
import Breadcrump from "../components/Breadcrumb";

const MainLayout = ({ one }) => {
  const location = useLocation();
  const home = location.pathname == "/";
  const dashboard_admins = location.pathname == "/dash";
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
      {!dashboard_admins && <Header one={one} top={top} setTop={setTop} />}
      {!dashboard_admins && <CategoryNavLinks one={one} />}
      {!home && !dashboard_admins && <Breadcrump />}
      <main className="grow">
        <Outlet />
      </main>
      {!dashboard_admins && <Footer />}
    </div>
  );
};

export default MainLayout;
