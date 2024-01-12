"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const MainHome = () => {
  const router = useRouter();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Qadron Merch
          </h1>
          <p className="text-lg mb-8">
            Explore our exclusive collection and elevate your style with Qadron
            Merch.
          </p>
          <Button
            className="bg-blue-500 text-white"
            onClick={() => router.push("/login")}
          >
            {" "}
            Login
          </Button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
          {/* Include your featured products here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards go here */}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Customer Testimonials</h2>
          {/* Include your customer testimonials here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
