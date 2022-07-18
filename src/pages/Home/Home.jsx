import React from "react";
import {
  AnimationText,
  Banner,
  CategoryParallex,
  Philosophy,
  Services,
  TeamAndCompany,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Banner />
      <Philosophy />
      <AnimationText />
      <CategoryParallex />
      <Services />
      <TeamAndCompany />
    </div>
  );
};

export default Home;
