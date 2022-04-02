import React from "react";
import "./LoginHome.css";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function LoginHome() {
  return (
    <div className="container">
      <div className="nav">
        <a href="/">
          <img
            width="155px"
            height="47px"
            src="/images/login-logo.svg"
            alt=""
          />
        </a>
        <div>
          <Link to="/signup">
            <span className="nav-button-join">Join now</span>
          </Link>
          <Link to="/signin">
            <button className="nav-button-signin" type="button">
              Sign in
            </button>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="hero">
          <h1>Welcome to your professional community</h1>
          <img
            src="/images/login-hero.svg"
            alt="Welcome to your professional community"
          />
        </div>
        <div className="intent-module">
          <ul>
            <a href="/">
              <ArrowRightIcon style={{ fontSize: 60 }} />
              Search for a job
            </a>
            <a href="/">
              <ArrowRightIcon style={{ fontSize: 60 }} />
              Find a person you know
            </a>
            <a href="/">
              <ArrowRightIcon style={{ fontSize: 60 }} />
              Learn a new skill
            </a>
          </ul>
          <button type="button" className="google-btn">
            <img src="../images/google.svg" alt="Google-Logo"></img> Sign in
            with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginHome;
