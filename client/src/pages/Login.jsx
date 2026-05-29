import { Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAdmin", "true");
      message.success("Muvaffaqiyatli kirdingiz!");
      navigate("/admin");
    } else {
      message.error("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="w-full h-screen login-bg flex justify-center relative items-center">
      <div className="w-full max-w-md flex flex-col justify-center items-stretch gap-8 rounded-3xl py-12 px-16 bg-white">
        <h5 className="font-semibold text-center text-3xl text-dark-gray leading-normal">
          Hisobga kirish
        </h5>
        <div className="flex flex-col justify-start items-stretch gap-6">
          <div className="flex flex-col justify-start items-stretch gap-3">
            <label
              htmlFor="username"
              className="font-normal text-base text-dark-gray leading-normal"
            >
              Login
            </label>
            <Input
              size="large"
              id="username"
              placeholder="Loginni kiriting"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPressEnter={handleLogin}
            />
          </div>
        </div>
        <button className="btn" onClick={handleLogin}>
          Kirish
        </button>
        <p className="text-center text-sm text-dark-gray/70 font-medium">
          <span>Hisobingiz bo'lmasa, </span>
          <span>
            <Link to={"/register"} className="text-cyan-700">
              yarating
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

export default Login;
