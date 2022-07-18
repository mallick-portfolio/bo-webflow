import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="px-12 py-4 bg-white lg:py-8 mx-auto flex justify-between items-center relative z-50">
        <div>
          <img className="w-8" src={logo} alt="" />
        </div>
        <div className="flex  items-center flex-row-reverse lg:flex-row">
          <div onClick={() => setActive(!active)} className="flex lg:hidden">
            {!active ? <AiOutlineMenu /> : <ImCross />}
          </div>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex">
            <ul className="md:flex items-center">{menus}</ul>
          </nav>
          <div className="lg:mr-0 mr-6">
            <BsCart4 className="cursor-pointer font-bold text-lg" />
          </div>
        </div>
      </div>

      {/* Mobile and Tab menu */}
      <nav
        className={`flex bg-white z-10 w-full lg:hidden absolute duration-700 transition-all ease-in-out ${
          active ? "top-12 left-12" : "-top-64 left-12"
        }`}
      >
        <ul className="">{menus}</ul>
      </nav>
    </>
  );
};

const menus = (
  <>
    <li className="text-lg font-semibold text-black mr-6 nav-item">
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li className="text-lg font-semibold text-black mr-6 nav-item">
      <NavLink to={"/about"}> About</NavLink>
    </li>
    <li className="text-lg font-semibold text-black mr-6 nav-item">
      <NavLink to={"/work"}>Work</NavLink>
    </li>
    <li className="text-lg font-semibold text-black mr-6 nav-item">News</li>
    <li className="text-lg font-semibold text-black mr-6 nav-item">Contact</li>
    <li className="text-lg font-semibold text-black mr-6 nav-item"></li>
  </>
);
export default Header;
