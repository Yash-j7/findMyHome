import React, { useState } from "react";
import logo from "../../public/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 text-black font-mono">
      <div className="flex items-center space-x-4 w-[20%] md:ml-20">
        <img src={logo} alt="logo" width={30} height={30} />
        <p className="text-xl font-bold">findMyHome</p>
      </div>
      <div className="hidden md:flex space-x-8 w-[60%] justify-center">
        <ul className="flex space-x-8">
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Home
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            About
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Contact
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Agent
          </li>
        </ul>
      </div>
      <div className="hidden md:flex space-x-8 w-[20%]">
        <ul className="flex space-x-8">
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Sign in
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Sign up
          </li>
        </ul>
      </div>
      <div className="md:hidden  flex items-center">
        <button
          onClick={toggleMenu}
          className="outline-none mobile-menu-button"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } right-0 top-0 w-full md:hidden`}
      >
        <ul className="flex  flex-col items-center space-y-2 mt-4">
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Home
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            About
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Contact
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Agent
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Sign in
          </li>
          <li className="hover:underline hover:text-orange-500 cursor-pointer">
            Sign up
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
