// src/pages/Login.jsx
import { Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import { supabase } from "../lib/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      return message.error("Email va parolni kiriting");
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      return message.error("Login yoki parol noto'g'ri!");
    }

    // Rolga qarab yo'naltirish
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    message.success("Muvaffaqiyatli kirdingiz!");

    if (profile?.role === "admin") navigate("/admin");
    else if (profile?.role === "provider") navigate("/provider/requests");
    else navigate("/");
  };

  return (
    <div className="w-full h-screen login-bg flex justify-center relative items-center">
      <div className="w-full max-w-md flex flex-col justify-center items-stretch gap-8 rounded-3xl py-12 px-16 bg-white">
        <h5 className="font-semibold text-center text-3xl text-dark-gray leading-normal">
          Hisobga kirish
        </h5>
        <div className="flex flex-col justify-start items-stretch gap-6">
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
              onPressEnter={handleLogin}
            />
          </div>
        </div>
        <button className="btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Kirilmoqda..." : "Kirish"}
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