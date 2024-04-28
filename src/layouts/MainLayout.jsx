import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products, scrollTop } from "../data/data";

const MainLayout = ({ one }) => {
  const location = useLocation();
  const home = location.pathname == "/";
  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  const [top, setTop] = useState(products.filter(e => { e.saved === true }))
  return (
    <div
      className={`flex ${home ? "bg-light-gray" : "bg-light-gray"
        } flex-col justify-between min-h-screen`}
    >
      <Header one={one} top={top} setTop={setTop} />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
