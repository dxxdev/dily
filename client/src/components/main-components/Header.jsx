import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets/images";
const Header = ({one}) => {
  return (
    <header className="bg-light-gray/80 backdrop-blur-md shadow-sm sticky top-0 z-[9999] py-1">
      <div className="my-container">
        <div className="flex w-full items-center justify-between">
          <Link>
            <h1 className="flex items-center gap-1 h-12 font-open-sans">
              <img src={logo} alt="web site logo" className="h-full" />
            </h1>
          </Link>

          <nav className="nav hidden md:block">
            <ul className="flex items-center justify-between gap-5 lg:gap-10">
              <li className="lowercase first-letter:uppercase">
                <NavLink to="/">Internet-magazin Dily.uz</NavLink>
              </li>
              <li className="lowercase first-letter:uppercase">
                <NavLink to="/Servises">Markaziy Servis Hizmati</NavLink>
              </li>
              <li className="lowercase first-letter:uppercase">
                <NavLink to="/qaysidir_sahifaga_otishini_kimdir_yozib_qoyishi_kerak">
                  Skupka
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              to={"/login"}
              className="bg-bright-green py-2 md:py-1 px-2 rounded-full flex space-x-3 text-white items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                className="mr-1 md:mr-3 ml-1"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                  fill="#fff"
                />
              </svg>
              Ro'yhatdan o'tish
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
