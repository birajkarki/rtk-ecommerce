"use client";

import React from "react";
import Logo from "../Logo";
import LoginButton from "./LoginButton";
import Menu from "./Menu";
import { useAuth } from "@/context/AuthContext";

const HeaderMain = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <Logo />
        <Menu />
        <LoginButton />
      </div>
    </header>
  );
};

export default HeaderMain;
