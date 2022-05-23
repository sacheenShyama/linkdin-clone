import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [allData, setAllData] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    profilepicture: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setAllData({
      ...allData,
      [id]: value,
    });
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(`formdata ${formData}`);

    axios
      .post(`https://pehlapehla.herokuapp.com/personal/post`, formData)
      .then((res) => {
        console.log(res.data);
        console.log(`res is ${res}`);
        alert("Registerd Successfully!");
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-img"
          src="../images/login-logo.svg"
          alt="linkedin logo"
          width="140"
        />
      </Link>
      <h1>Make the most of your professional life</h1>
      <form onSubmit={handleSignupSubmit}>
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          placeholder="Enter Your Email..."
          onChange={handleChange}
          required
        />
        <label>Password (6 or more characters)</label>
        <input
          type="password"
          id="password"
          minLength={6}
          placeholder="Enter Your Password..."
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label>Full name (required if registering)</label>
        <input
          type="text"
          id="fullname"
          onChange={handleChange}
          value={formData.fullname}
          placeholder="Enter Your Name"
          required
        />
        <label>Profile picture URL (optional)</label>
        <input
          type="text"
          id="profilepicture"
          onChange={handleChange}
          value={formData.profilepicture}
          placeholder="image"
        />

        <span>
          By clicking Agree & Join, you agree to the LinkedIn
          <a
            href="https://www.linkedin.com/legal/user-agreement?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=registration-frontend_join-form-user-agreement"
            rel="noreferrer"
            target="_blank"
          >
            User Agreement
          </a>
          ,
          <a
            href="https://www.linkedin.com/legal/privacy-policy?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=registration-frontend_join-form-privacy-policy"
            rel="noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
          , and
          <a
            href="https://www.linkedin.com/legal/cookie-policy?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=registration-frontend_join-form-cookie-policy"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Cookie Policy
          </a>
        </span>
        <input className="link_button" value={"submit"} type="submit" />
      </form>

      <div className="google_button">
        <span>it you submit your detail click below button</span>
        <Link to="/signin">
          <button>go to login</button>
        </Link>

        <span> ──────────── or ────────────</span>
        <button className="button_2" type="submit">
          <img
            src="../images/google.svg"
            width="40px"
            height="24px"
            alt="google-logo"
          />
          <span> Join with Google</span>
        </button>
        <p className="login-p">
          Already on LinkedIn?
          <Link to="/home" style={{ textDecoration: "none" }}>
            <span className="login_register">Sign in</span>
          </Link>
        </p>
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

export default Signup;
<script src="./Register.js"></script>;
