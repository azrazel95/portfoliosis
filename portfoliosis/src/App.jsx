import React from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/Header";
import Navigation from "./components/pages/Navigation";
import Project from "./components/pages/Project";
import Footer from "./components/pages/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </Router>
      <Footer class="m-0" /> */}
      <PortfolioContainer />
    </div>
  );
}

export default App;
