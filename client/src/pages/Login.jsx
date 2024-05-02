import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class="max-w-sm w-full p-6 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg shadow hover:bg-gray-100/70 flex flex-col justify-start items-stretch gap-5">
        <h5 class="text-2xl font-bold tracking-tight text-dark-gray">
          Hisobga kirish
        </h5>
        <div className="flex flex-col justify-start items-stretch gap-5">
          <div className="flex flex-col justify-start items-stretch gap-1.5">
            <label
              htmlFor="email"
              className="font-bold leading-normal text-dark-gray-3 text-sm"
            >
              E-mail
            </label>
            <Input
              size="large"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col justify-start items-stretch gap-1.5">
            <label
              htmlFor="password"
              className="font-bold leading-normal text-dark-gray-3 text-sm"
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
        <p className="text-center text-sm text-dark-gray font-medium">
          <span>Hisobingiz bo'lmasa, </span>
          <span>
            <Link to={"/register"} className="text-cyan-700">ro'yxatdan o'ting</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
