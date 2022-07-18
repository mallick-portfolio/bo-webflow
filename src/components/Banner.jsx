import React from "react";
import rotate from "../assets/images/rotate.png";
const Banner = () => {
  return (
    <div className="px-12 mx-auto">
      <h4 className="text-lg font-medium text-secondary">Hello people!</h4>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-primary text-[8vw] leading-none font-bold">
          We're creative digital studio.
        </h1>
        <div className="mr-36 relative hover:bg-[#a1c4e4] duration-1000 cursor-pointer rounded-full p-4">
          <img className="w-36  animate-spin-slow" src={rotate} alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-7 rounded-lg border-2 border-primary ">
            <div className="animate-bounce absolute w-[2px] h-2 rounded-md bg-primary left-[6px] top-[8px]">
              {""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
