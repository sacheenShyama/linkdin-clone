// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqgYstl_9rBtahQL5Z6mwP-mjbipt7MXc",
  authDomain: "linkedin-self.firebaseapp.com",
  projectId: "linkedin-self",
  storageBucket: "linkedin-self.appspot.com",
  messagingSenderId: "524141449190",
  appId: "1:524141449190:web:759fc5f6ff5617a1115027",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
