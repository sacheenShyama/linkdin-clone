import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";


import styled from "styled-components";
import Home from "./components/Home/Home";
import  Header  from "./components/Navbar/Header";
import LoginHome from "./components/Login/LoginHome";
import Signin from "./components/Login/Signin";
import UserProfile from "./Profile/Profile"
import Signup from "./components/Login/Signup"
// import Register from "./components/Login/Register"
import {MainJob} from "../src/components/Job/MainJob"
import {MainNet} from "../src/components/Network/MainNet"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<LoginHome/>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/job" element={<MainJob />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/network" element={<MainNet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
