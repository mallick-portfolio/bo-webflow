import React from "react";
import brain from "../assets/images/brain.png";
import logic from "../assets/images/logic.png";
import blub from "../assets/images/bulb.png";
const Services = () => {
  return (
    <div className="bg-primary py-28">
      <div className="px-12 mx-auto">
        <h1 className="text-[9vw] text-white font-semibold">Our Services</h1>
        <div className="flex items-center py-8 border-b border-[#242424] px-4">
          <div className="flex items-center w-1/3">
            <img className="w-12 mr-5" src={brain} alt="" />
            <h2 className="text-4xl text-white font-bold">Concept</h2>
          </div>
          <h3 className="text-2xl text-[#6e6e6e] w-2/3">
            Award winning concepts and ideas.
          </h3>
        </div>
        <div className="flex items-center py-8 border-b border-[#242424] px-4  ">
          <div className="flex items-center w-1/3">
            <img className="w-12 mr-5" src={logic} alt="" />
            <h2 className="text-4xl text-white font-bold">Graphic Design</h2>
          </div>
          <h3 className="text-2xl text-[#6e6e6e] w-2/3">
            Strategic masterplans and business concept strategy.
          </h3>
        </div>
        <div className="flex items-center py-8 border-b border-[#242424] px-4  ">
          <div className="flex items-center w-1/3">
            <img className="w-12 mr-5" src={blub} alt="" />
            <h2 className="text-4xl text-white font-bold">Strategy</h2>
          </div>
          <h3 className="text-2xl text-[#6e6e6e] w-2/3">
            High quality products that offer an all-in solution.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
