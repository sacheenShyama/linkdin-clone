import React, { useEffect, useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';

function Signin() {

const [userName,setUserName]=useState("")
const [userPassword,setUserPassword]=useState("")
   

const handleSubmit=()=>{

    console.log(userName,userPassword)

}

// const handlechange=(e)=>{
// const {id,value}=e.target;
// setUserDetail({
//     ...userDetail,
//     [id]:value,
// })


// }

// useEffect(()=>{

// },[])


    return (
        <div className="login">
            <Link to="/"><img className="login-img" src="../images/login-logo.svg"
            alt="linkedin logo" width="140" height="270"
            /></Link>
            <h1>Welcome Back</h1>
            <h4>Don't miss your next opportunity. Sign in to stay updated on your professional world.</h4>
            <form>
                <label >
                    name
                </label>
                <input
                    type="name"
                    id="name"
                    placeholder="enter name"
                    onChange={(e)=>{setUserName(e.target.value)}}
                />
                <label>
                    Password (6 or more characters)
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e)=>{setUserPassword(e.target.value)}}


                />
                {/* <Link to="/home"> */}
                    <button className="link_button" onSubmit={handleSubmit} type="button" >Sign in</button>
                {/* </Link> */}
            </form>
            <div className="google_button">
                <span> ────────────  or  ────────────</span>
                <button type="submit" >
                    <img src="../images/google.svg" width="40px" height="24px" alt="google-logo" />
                    Join with Google
                </button>
            </div>
            <p>Looking to create a page for a business? <a href="https://www.linkedin.com/help/linkedin/answer/122238?trk=registration-frontend_join-form-page-help-link" rel="noreferrer" target="_blank">Get help.</a>
            </p>
        </div>
    )
}

export default Signin