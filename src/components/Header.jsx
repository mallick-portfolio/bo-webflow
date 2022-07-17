import React from "react";
import logo from "../assets/images/logo.png";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
  return (
    <div className="px-12 py-8 mx-auto flex justify-between items-center">
      <div>
        <img className="w-8" src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="flex items-center">
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
        <div>
          <BsCart4 className="cursor-pointer font-bold text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
