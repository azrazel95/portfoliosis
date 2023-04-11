import React from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";




function App() {
  return (
    <div className="App ">
      <PortfolioContainer />
    </div>
  );
}

export default App;
