import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./assets/dist/scss/mdb-pro.scss";
import "./index.css";
import App from "./App";
import * as firebase from "firebase/app";
import "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
var firebaseConfig = {
  apiKey: "AIzaSyCucj91_5AMOOwbiVoOgEO3ooyUYB3QPLw",
  authDomain: "influencerxyz-123.firebaseapp.com",
  databaseURL: "https://influencerxyz-123.firebaseio.com",
  projectId: "influencerxyz-123",
  storageBucket: "influencerxyz-123.appspot.com",
  messagingSenderId: "779710022421",
  appId: "1:779710022421:web:4ca1f0393b51f5d3989f1c",
  measurementId: "G-EE8G03BT73",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
