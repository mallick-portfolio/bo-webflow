import React from "react";
import {
  AnimationText,
  Banner,
  CategoryParallex,
  Philosophy,
  Services,
  Talk,
  TeamAndCompany,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Banner
        title={"We're creative digital studio."}
        headline="Hello people!"
      />
      <Philosophy />
      <AnimationText title={"Featured Work. Featured Work. Featured Work"} />
      <CategoryParallex />
      <Services />
      <TeamAndCompany />
      <Talk />
    </div>
  );
};

export default Home;
