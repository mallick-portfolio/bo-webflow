import React from "react";
import rotate from "../assets/images/rotate.png";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const Banner = ({ title, headline }) => {
  return (
    <div className="px-12 py-8 mx-auto">
      <h4 className="text-lg font-medium text-secondary mb-8">{headline}</h4>
      <div className="flex justify-between items-center">
        <h1 className="banner-title">{title}</h1>
        <div className="banner-image">
          <img
            className="w-36 relative z-40 animate-spin-slow"
            src={rotate}
            alt=""
          />
          <div className="banner-bg">
            <div className="banner-hover">{""}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <ul className="flex">
          <li className="social-item">
            <FiInstagram className="social-icon" />
          </li>
          <li className="social-item">
            <GrTwitter className="social-icon" />
          </li>
          <li className="social-item">
            <FaLinkedinIn className="social-icon" />
          </li>
          <li className="social-item">
            <FaFacebookF className="social-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
