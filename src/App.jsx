import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {MainNet} from "./components/Network/MainNet"
import {MainJob} from "./components/Job/MainJob" 


function App() {
  return (
    <div
      // className="app"
      // style={{
      //   display: "grid",
      //   width: "80%",
      //   margin: "auto",
      //   gridTemplateColumns: "26% 70%",
      //   gap: "2%",
      // }}
    >
      {/* <MainNet/> */}
      <MainJob/>


    </div>
  );
}

export default App;