import React from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/pages/Resume";
import Project from "./components/pages/Projects";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";

const projects = [
  {
    id: 1,
    name: "bread and circus",
    image: ,
    alt: "an image showing a blog style website", 
    link: "https://breadandcircus.herokuapp.com/",
    description: "A blog-style website"
  },
  {
    id: 2,
    name: "Notice Taker",
    image: ,
    alt: "an image showing a website for taking notes", 
    link: "https://notice-taker.herokuapp.com/",
    description:"A note taking website!"
  },
  {
    id: 3,
    name: "getOutdoorsFlorida",
    image: ,
    alt: , 
    link: "https://springhunters1.herokuapp.com/",
    description:
  },
  {
    id: 4,
    name: ,
    image: ,
    alt: , 
    link: ,
    description:
  },
]


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
