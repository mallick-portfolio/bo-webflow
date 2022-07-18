import React from "react";
import { Header } from "./components";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
