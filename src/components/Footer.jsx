import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="px-12 mx-auto flex gap-24 justify-between items-start py-12">
      <div className="w-1/2 pr-6">
        <h4 className="text-secondary text-2xl font-medium">
          Bo is an award UI/UX designs and branding agency based in New York,
          USA.
        </h4>
        <ul className="flex items-center py-6">
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
      <div className="w-1/2 pl-6">
        <h4 className="text-secondary text-2xl font-medium">
          Bo is an award UI/UX designs and branding agency based in New York,
          USA.
        </h4>
        <ul className="flex flex-col items-start py-6">
          <li className="text-xl font-medium text-secondary">contact@bo.com</li>
          <li className="text-xl font-medium text-secondary">+1300 877 503</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
