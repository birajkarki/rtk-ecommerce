"use client";
import React from "react";
import Logo from "../Logo";
import Searchbox from "./Searchbox";
import LogoutButton from "./LogoutButton";
import { useAuth } from "@/context/AuthContext";

const HeaderEcommerce = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <Logo />
        <Searchbox />
        <LogoutButton />
      </div>
    </header>
  );
};

export default HeaderEcommerce;
