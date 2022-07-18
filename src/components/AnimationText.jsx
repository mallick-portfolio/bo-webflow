import React from "react";
import Marquee from "react-fast-marquee";
const AnimationText = ({ title }) => {
  return (
    <div className="my-16">
      <Marquee speed={80} className="text-primary text-[8vw] font-bold">
        {title}
      </Marquee>
    </div>
  );
};

export default AnimationText;
