import React, { useState } from "react";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
