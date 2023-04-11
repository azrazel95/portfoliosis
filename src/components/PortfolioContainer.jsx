import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./Footer.jsx";
// import backgroundVideo from '/assets/bg.mp4'

const projects = [
  {
    id: 1,
    name: "Bread and Circus",
    image: "/assets/images/breadancircus.png",
    alt: "an image showing a blog style website",
    link: "https://breadandcircus.herokuapp.com/",
    description: "A blog-style website",
  },
  {
    id: 2,
    name: "Notice Taker",
    image: "/assets/images/noticed.png",
    alt: "an image showing a website for taking notes",
    link: "https://notice-taker.herokuapp.com/",
    description: "A note taking website for when you need a notepad on the go",
  },
  {
    id: 3,
    name: "GetOutdoorsFlorida",
    image: "/assets/images/springhunters.png",
    alt: "an image showing a website displaying a list of springs",
    link: "https://springhunters1.herokuapp.com/",
    description: "A website aiming to make it easier to find springs near you!",
  },
  {
    id: 4,
    name: "Cloudy Prophecies",
    image: "/assets/images/cloudyprohpecies.png",
    alt: "A website displaying the weather in a city that has been searched for",
    link: "https://azrazel95.github.io/cloudyprophecies/",
    description:
      "A Weather forecasting website using input and a Weather api showing the forecast for the next 5 days",
  },
  {
    id: 5,
    name: "Employee Management System",
    image: "/assets/images/manyportfolios.png",
    alt: "a website showing the result of said CLI input rendered onto a website using cards",
    link: "https://github.com/azrazel95/manyportfolios",
    description:
      "A CMS style employee management system using CLI questions to create a user friendly website displaying information about said employees",
  },
];
export default function PortfolioContainer() {
 

  
  return (
    <div>
      
      
      <BrowserRouter>
        <div >
          <NavTabs />
          <Routes>
          {/* <Switch> */}
            <Route exact path="" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="projects"
              element={<Projects projects={projects} />}
            />
            <Route path="resume" element={<Resume />} />
          {/* </Switch> */}
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
