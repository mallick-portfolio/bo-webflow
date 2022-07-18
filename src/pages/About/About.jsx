import React from "react";
import {
  AnimationText,
  Banner,
  Philosophy,
  TeamMember,
} from "../../components";

const About = () => {
  return (
    <div>
      <Banner
        title={"We specialize in problem solving"}
        headline={"About Bo Studio"}
      />
      <Philosophy />
      <AnimationText title={"The Team. The Team. The Team. The Team "} />
      <TeamMember />
    </div>
  );
};

export default About;
