import React from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBORzCWcpwFfokgbH1kxjPsxJAJaTL4eBU",
  authDomain: "website-380701.firebaseapp.com",
  projectId: "website-380701",
  storageBucket: "website-380701.appspot.com",
  messagingSenderId: "992945648147",
  appId: "1:992945648147:web:6da18ca76d9c096dcb05e6",
  measurementId: "G-8CDVW3R8B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App ">
      <PortfolioContainer />
    </div>
  );
}

export default App;
