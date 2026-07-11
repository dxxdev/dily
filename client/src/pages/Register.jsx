// src/pages/Register.jsx
import { Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import { supabase } from "../lib/supabase";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      return message.error("Email va parolni kiriting");
    }
    if (password.length < 6) {
      return message.error("Parol kamida 6 belgidan iborat bo'lishi kerak");
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, phone },
      },
    });
    setLoading(false);

    if (error) {
      return message.error(error.message);
    }

    // Agar email tasdiqlash yoqilgan bo'lsa, session bo'lmaydi
    if (!data.session) {
      message.success("Ro'yxatdan o'tdingiz! Emailingizni tasdiqlang.");
      navigate("/login");
    } else {
      message.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate("/");
    }
  };

  return (
    <div className="w-full h-screen login-bg flex justify-center relative items-center">
      <div className="w-full max-w-md flex flex-col justify-center items-stretch gap-8 rounded-3xl py-12 px-16 bg-white">
        <h5 className="font-semibold text-center text-3xl text-dark-gray leading-normal">
          Hisob yaratish
        </h5>
        <div className="flex flex-col justify-start items-stretch gap-6">
          <div className="flex flex-col justify-start items-stretch gap-3">
            <label htmlFor="fullName" className="font-normal text-base text-dark-gray leading-normal">
              Ism-familiya
            </label>
            <Input
              size="large"
              id="fullName"
              placeholder="Ismingiz"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-stretch gap-3">
            <label htmlFor="phone" className="font-normal text-base text-dark-gray leading-normal">
              Telefon raqam
            </label>
            <Input
              size="large"
              id="phone"
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-stretch gap-3">
            <label htmlFor="email" className="font-normal text-base text-dark-gray leading-normal">
              Email
            </label>
            <Input
              size="large"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-stretch gap-1.5">
            <label htmlFor="password" className="font-normal text-base text-dark-gray leading-normal">
              Parol
            </label>
            <Input.Password
              size="large"
              id="password"
              placeholder="Parolingizni kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPressEnter={handleRegister}
            />
          </div>
        </div>
        <button className="btn btn-dark" onClick={handleRegister} disabled={loading}>
          {loading ? "Yaratilmoqda..." : "Yaratish"}
        </button>
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