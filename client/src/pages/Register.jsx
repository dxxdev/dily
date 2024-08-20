import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";

const Register = () => {
  return (
    <div className="w-full h-screen login-bg flex justify-center relative items-center">
      <div className="w-full max-w-md flex flex-col justify-center items-stretch gap-8 rounded-3xl py-12 px-16 bg-white">
        <h5 className="font-semibold text-center text-3xl text-dark-gray leading-normal">
          Hisob yaratish
        </h5>
        <div className="flex flex-col justify-start items-stretch gap-6">
          <div className="flex flex-col justify-start items-stretch gap-3">
            <label
              htmlFor="email"
              className="font-normal text-base text-dark-gray leading-normal"
            >
              Email
            </label>
            <Input size="large" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="flex flex-col justify-start items-stretch gap-1.5">
            <label
              htmlFor="password"
              className="font-normal text-base text-dark-gray leading-normal"
            >
              Parol
            </label>
            <Input.Password
              size="large"
              id="password"
              placeholder="Parolingizni kiriting"
            />
          </div>
        </div>
        <button className="btn btn-dark">Yaratish</button>
        <p className="text-center text-sm text-dark-gray/70 font-medium">
          <span>Hisobingiz bo'lsa, </span>
          <span>
            <Link to={"/login"} className="text-cyan-700">
              kiring
            </Link>
          </span>
        </p>
      </div>
      <Link to={"/"}>
        <h2 className="h-12 absolute top-10 left-10 hover:opacity-80">
          <img src={logo} className="h-full" alt="" />
        </h2>
      </Link>
    </div>
  );
};

export default Register;
