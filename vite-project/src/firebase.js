// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8hQVAQBPn5ZxjWpESWgxzF83V6-habwI",
  authDomain: "linkedin-clone-89465.firebaseapp.com",
  projectId: "linkedin-clone-89465",
  storageBucket: "linkedin-clone-89465.appspot.com",
  messagingSenderId: "304499494549",
  appId: "1:304499494549:web:fb333185a8096a1c78959c",
  measurementId: "G-ENL2YCQB3P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
