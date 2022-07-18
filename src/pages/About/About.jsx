import React from "react";
import { Banner, Philosophy } from "../../components";

const About = () => {
  return (
    <div>
      <Banner
        title={"We specialize in problem solving"}
        headline={"About Bo Studio"}
      />
      <Philosophy />
    </div>
  );
};

export default About;
