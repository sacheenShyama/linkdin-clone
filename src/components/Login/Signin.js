import React, { useEffect, useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import Home from "../Home/Home";

function Signin() {
    const navigate=useNavigate()
    let dusraPage=false;

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(userName, userPassword);
    fetchUser();
  };

  const fetchUser = async () => {
    const res = await axios.get(
      `https://pehlapehla.herokuapp.com/personal/get/${userName}`
    );
    // console.log(res)
    const data1 = await res.data;
console.log(data1)
    console.log(data1.fullname);
    console.log(data1.profilepicture);
    console.log(data1.email);
if(userName===data1.fullname&&userPassword===data1.password){
dusraPage=true;
}else{
    dusraPage=false;
}

if(dusraPage){
navigate("/home")
{/* <Home key={{data1.fullname},{data1.profilepicture}}/> */}
}else{
    alert("credential doesn't match")
}

  };



  useEffect(() => {
    // fetchUser();
  }, [userName]);

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-img"
          src="../images/login-logo.svg"
          alt="linkedin logo"
          width="140"
          height="270"
        />
      </Link>
      <h1>Welcome Back</h1>
      <h4>
        Don't miss your next opportunity. Sign in to stay updated on your
        professional world.
      </h4>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="name"
          id="name"
          placeholder="enter name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Password (6 or more characters)</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        {/* <Link to=""> */}
          <input className="link_button" value={"submit"} type="submit" />
        {/* </Link> */}
      </form>
      <div className="google_button">
        <span> ──────────── or ────────────</span>
        <button type="submit">
          <img
            src="../images/google.svg"
            width="40px"
            height="24px"
            alt="google-logo"
          />
          Join with Google
        </button>
      </div>
      <p>
        Looking to create a page for a business?{" "}
        <a
          href="https://www.linkedin.com/help/linkedin/answer/122238?trk=registration-frontend_join-form-page-help-link"
          rel="noreferrer"
          target="_blank"
        >
          Get help.
        </a>
      </p>
    </div>
  );
}

export default Signin;
