import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scrollTop } from "../data/data";

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname == "/";
  useEffect(() => {
    scrollTop();
  }, [location.pathname]);
  return (
    <div
      className={`flex ${
        home ? "bg-light-gray" : "bg-white"
      } flex-col justify-between min-h-screen`}
    >
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
