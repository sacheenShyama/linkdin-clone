import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";


import styled from "styled-components";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import LoginHome from "./components/Login/LoginHome";
import Signin from "./components/Login/Signin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<LoginHome/>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        {/* <Route path="/notifications" element={<Notifications />}></Route> */}
        {/* <Route path="/network" element={<Network />}></Route> */}
        {/* <Route path="/profile" element={<Profile />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
