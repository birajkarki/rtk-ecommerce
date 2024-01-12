"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
const LoginButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        className="bg-blue-500 text-white"
        onClick={() => router.push("/login")}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
