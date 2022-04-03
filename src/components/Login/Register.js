import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {

  function mytimedetail(){
        let detail = JSON.parse(localStorage.getItem("mytime"))
        console.log(detail)
  }
    mytimedetail()

    return (
        <div className="login">
            <img src="../images/login-logo.svg"
            alt="linkedin logo" width="140"
            />
            <h1>Make the most of your professional life</h1>
            <form>
            <label >
                Full name (required if registering)
                </label>
                <input
                    type="text"
                    placeholder="enrter name"
                />
                <label >
                    Profile picture URL (optional)
                </label>
                <input
                    type="text"
                    placeholder="image"
                />
                <Link to="/home">
                <button className="link_button" type="submit">Continue</button></Link>
            </form>
            <p>Looking to create a page for a business? <a href="https://www.linkedin.com/help/linkedin/answer/122238?trk=registration-frontend_join-form-page-help-link" rel="noreferrer" target="_blank">Get help.</a>
            </p>
        </div>
    )
}
export default Register;