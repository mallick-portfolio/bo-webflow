import React from "react";
import aob from "../assets/images/aob.png";
import ring from "../assets/images/risign.svg";
import space from "../assets/images/space.png";
import higibigi from "../assets/images/higibigi.png";
import webflow from "../assets/images/webflow.png";
import show from "../assets/images/snow.svg";
const TeamAndCompany = () => {
  return (
    <div className="bg-primary">
      <div className="px-12 mx-auto">
        <h1 className="text-white text-center text-xl mb-4 font-bold">
          Teams and companies we work with
        </h1>
        <ul className="flex justify-between items-center">
          <li>
            <img className="w-24" src={aob} alt="" />
          </li>
          <li>
            <img className="w-24" src={ring} alt="" />
          </li>
          <li>
            <img className="w-24" src={space} alt="" />
          </li>
          <li>
            <img className="w-12" src={higibigi} alt="" />
          </li>
          <li>
            <img className="w-24" src={webflow} alt="" />
          </li>
          <li>
            <img className="w-24" src={show} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamAndCompany;
