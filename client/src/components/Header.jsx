import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { products, saved } from "../data/data";
import CategoryMenu from "../additions/CategoryMenu";
import { logo } from "../assets/images";
import account_icon from '../assets/icons/profile-icon.svg'
const Header = ({ top, setTop, one }) => {

  return (
    <header className="bg-light-gray/80 backdrop-blur-md shadow-sm sticky top-0 z-[9999] py-1">
      <div className="my-container">
        <div className="flex w-full items-center justify-between">
          <Link>
            <h1 className="flex items-center gap-1 font-open-sans">
              <img src={logo} alt="logo" className="h-full" width={"100px"}/>
            </h1>
          </Link>

          <nav className="nav">
            <ul className="flex items-center justify-between gap-10">
              <li className="lowercase first-letter:uppercase">
                <NavLink to='/'>
                  dily.uz
                </NavLink>
              </li>
              <li className="lowercase first-letter:uppercase">
                <NavLink to='/qaysidir_sahifaga_otishini_kimdir_yozib_qoyishi_kerak'>
                  Markaziy Servis Hizmati
                </NavLink>
              </li>
              <li className="lowercase first-letter:uppercase">
                <NavLink to='/qaysidir_sahifaga_otishini_kimdir_yozib_qoyishi_kerak'>
                  Skupka
                </NavLink>
              </li>
            </ul>
          </nav>


          <Link>
            <img className="w-5" src={account_icon} alt="" />
          </Link>
        </div>
      </div>


    </header>
  );
};

export default Header;
