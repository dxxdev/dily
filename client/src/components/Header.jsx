import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { products, saved } from "../data/data";
import CategoryMenu from "../additions/CategoryMenu";
import { logo } from "../assets/images";
import account_icon from '../assets/icons/profile-icon.svg'
const Header = ({ top, setTop, one }) => {

  return (
    <header className="bg-light-gray/80 backdrop-blur-xl shadow-sm sticky top-0 z-[9999] py-3">
      <div className="my-container relative">
        <div className="flex w-full items-center justify-between">
          <Link>
            <h1 className="flex items-center gap-1 h-30 font-open-sans">
              <img src={logo} alt="" className="h-10 w-24" />
            </h1>
          </Link>

          <nav className="nav">
            <ul className="flex items-center justify-between gap-10">
              <li className="lowercase first-letter:uppercase font-open-sans tracking-wider">
                <NavLink to='/'>
                  Internet-magazin Dily.uz
                </NavLink>
              </li>
              <li className="lowercase first-letter:uppercase font-open-sans tracking-wider">
                <NavLink to='/qaysidir_sahifaga_otishini_kimdir_yozib_qoyishi_kerak'>
                  Markaziy Servis Hizmati
                </NavLink>
              </li>
              <li className="lowercase first-letter:uppercase font-open-sans tracking-wider">
                <NavLink to='/qaysidir_sahifaga_otishini_kimdir_yozib_qoyishi_kerak'>
                  Skupka
                </NavLink>
              </li>
            </ul>
          </nav>


          <Link>
            <img className="w-5" src={account_icon} alt="account icon" />
          </Link>
        </div>
      </div>


    </header>
  );
};

export default Header;
