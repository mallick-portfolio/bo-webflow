import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="px-12 py-8 mx-auto flex justify-between items-center">
      <div>
        <img className="w-8" src={logo} alt="" />
      </div>
      <div className="flex items-center flex-row-reverse lg:flex-row">
        <div onClick={() => setActive(!active)} className="flex lg:hidden">
          {!active ? <AiOutlineMenu /> : <ImCross />}
        </div>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="md:flex items-center">
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              Home
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              About
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              Work
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              News
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              Contact
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item"></li>
          </ul>
        </nav>

        {/* Mobile and Tab menu */}
        <nav
          className={`flex bg-white z-50 w-full lg:hidden absolute duration-1000 transition-all ease-in-out ${
            active ? "top-16 left-12" : "-top-64 left-12"
          }`}
        >
          <ul className="">
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              Home
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              About
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              Work
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              News
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item">
              Contact
            </li>
            <li className="text-lg font-semibold text-black mr-6 nav-item"></li>
          </ul>
        </nav>

        <div className="lg:mr-0 mr-6">
          <BsCart4 className="cursor-pointer font-bold text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
