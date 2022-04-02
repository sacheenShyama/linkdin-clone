import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {

   
    return (
        <div className="login">
            <Link to="/"><img className="login-img" src="../images/login-logo.svg"
            alt="linkedin logo" width="140"
            /></Link>
            <h1>Make the most of your professional life</h1>
            <form>
                <label >
                    Email
                </label>
                <input
                    type="email"
                    placeholder=""
                />
                <label>
                    Password (6 or more characters)
                </label>
                <input
                    type="password"
                    placeholder=""
                />
                <span>By clicking Agree & Join, you agree to the LinkedIn 
                    <a href="https://www.linkedin.com/legal/user-agreement?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=registration-frontend_join-form-user-agreement" rel="noreferrer" target="_blank"> User Agreement</a>
                    ,
                    <a href="https://www.linkedin.com/legal/privacy-policy?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=registration-frontend_join-form-privacy-policy" rel="noreferrer" target="_blank"> Privacy Policy</a>
                    , and
                    <a href="https://www.linkedin.com/legal/cookie-policy?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=registration-frontend_join-form-cookie-policy" rel="noreferrer" target="_blank"> Cookie Policy</a>
                </span>
                <Link to="/signup/user">
                    <button className="link_button" type="button">Agree & Join</button>
                </Link>
            </form>
            <div className="google_button">
                <span> ────────────  or  ────────────</span>
                <button className="button_2" type="submit" >
                    <img src="../images/google.svg" width="40px" height="24px" alt="google-logo" />
                    <span> Join with Google</span>
                </button>
                <p className="login-p">Already on LinkedIn? 
                <Link to="/home" style={{ textDecoration: 'none' }}><span className="login_register">Sign in</span></Link>
                </p>
            </div>
            <p>Looking to create a page for a business? <a href="https://www.linkedin.com/help/linkedin/answer/122238?trk=registration-frontend_join-form-page-help-link" rel="noreferrer" target="_blank">Get help.</a>
            </p>
        </div>
    )
}

export default Signup;