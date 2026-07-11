// src/components/main-components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets/images";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";

const Header = ({ one }) => {
  const { user, profile } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="bg-light-gray/80 backdrop-blur-md shadow-sm sticky top-0 z-[9999] py-1">
      <div className="my-container">
        <div className="flex w-full items-center justify-between">
          <Link to="/">
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
                <NavLink to="/find-provider">Usta topish</NavLink>
              </li>
              {profile?.role === "provider" && (
                <li className="lowercase first-letter:uppercase">
                  <NavLink to="/provider/requests">Mening so'rovlarim</NavLink>
                </li>
              )}
              {user && profile?.role === "customer" && (
                <li className="lowercase first-letter:uppercase">
                  <NavLink to="/my-requests">Buyurtmalarim</NavLink>
                </li>
              )}
              {user && !profile?.role && profile?.role !== "provider" && (
                <li className="lowercase first-letter:uppercase">
                  <NavLink to="/provider/register">Usta bo'lish</NavLink>
                </li>
              )}
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-gray-200 py-2 md:py-1 px-4 rounded-full text-dark-gray"
              >
                Chiqish
              </button>
            ) : (
              <Link
                to="/login"
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;