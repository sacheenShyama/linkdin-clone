import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/jobs" element={<Job />}></Route> */}
        {/* <Route path="/notifications" element={<Notifications />}></Route> */}
        {/* <Route path="/network" element={<Network />}></Route> */}
        {/* <Route path="/profile" element={<Profile />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
