import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="flex items-center space-x-4">
      <ul className="flex gap-6">
        <li>
          <Link className="text-gray-800 hover:text-gray-600" href="/aboutus">
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:text-gray-600"
            href="/workwithus"
          >
            Work With Us
          </Link>
        </li>
        <li>
          <Link className="text-gray-800 hover:text-gray-600" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
