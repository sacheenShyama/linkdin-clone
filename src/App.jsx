import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Login/Signup';
import LoginHome from './components/Login/LoginHome';
import Register from './components/Login/Register';
import Signin from './components/Login/Signin';
import Header from './components/Navbar/Header'
import UserProfile from './components/Profile/Profile';


function App() {

	return (
		<div className="app" >



			<Routes>
				<Route path="/" element={<LoginHome />} exact />
				<Route path="/signup" element={<Signup />} exact />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup/user" element={<Register />} />
				<Route path="/home" element={<Header />} />
				<Route path="/userprofile" element={<UserProfile />}/>
			</Routes>


		</div>
	);
}

export default App;