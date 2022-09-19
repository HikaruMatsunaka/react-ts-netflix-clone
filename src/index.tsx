import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgNoADoug7k1fF_GGRwBU0tFyXJuPiYcU",
  authDomain: "react-ts-netflix-clone.firebaseapp.com",
  projectId: "react-ts-netflix-clone",
  storageBucket: "react-ts-netflix-clone.appspot.com",
  messagingSenderId: "46073989116",
  appId: "1:46073989116:web:1e061e066aa8d0b4335479",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
