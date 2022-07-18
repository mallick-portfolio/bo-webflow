import React from "react";
import { Header, Footer } from "./components";
import { Home, About, Work } from "./pages";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/work"} element={<Work />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
