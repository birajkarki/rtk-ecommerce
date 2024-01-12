"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    // Call the logout function from your AuthContext to clear the token
    logout();

    // Redirect to the home page
    router.push("/");
  };

  return (
    <div>
      <Button className="bg-blue-500 text-white" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
