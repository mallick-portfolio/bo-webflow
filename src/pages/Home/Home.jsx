import React from "react";
import {
  AnimationText,
  Banner,
  CategoryParallex,
  Philosophy,
  Services,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Banner />
      <Philosophy />
      <AnimationText />
      <CategoryParallex />
      <Services />
    </div>
  );
};

export default Home;
