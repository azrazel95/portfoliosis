// importing react and browserrouter, as well as our components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./Footer.jsx";
// setting up props projects
const projects = [
  {
    id: 1,
    name: "GetOutdoorsFlorida",
    image: "/assets/images/springhunters.png",
    alt: "an image showing a website displaying a list of springs",
    link: "https://getoutdoorsfla.com/",
    githublink: "https://github.com/yeagermeister/getoutdoorsfla",
    description: "A Grassroots, Community driven Location aggregator",
  },
  {
    id: 2,
    name: "Bread and Circus",
    image: "/assets/images/breadancircus.png",
    alt: "an image showing a blog style website",
    link: "https://breadandcircus.herokuapp.com/",
    githublink: "https://github.com/azrazel95/breadandcircus",
    description: "A blog-style website",
  },
  {
    id: 3,
    name: "Noticed",
    image: "/assets/images/noticed.png",
    alt: "an image showing a website for taking notes",
    link: "https://notice-taker.herokuapp.com/",
    githublink: "https://github.com/azrazel95/noticed",
    description: "A note taking website for when you need a notepad on the go",
  },
  {
    id: 4,
    name: "Cloudy Prophecies",
    image: "/assets/images/cloudyprohpecies.png",
    alt: "A website displaying the weather in a city that has been searched for",
    link: "https://azrazel95.github.io/cloudyprophecies/",
    githublink: "https://github.com/azrazel95/cloudyprophecies",
    description:
      "A Weather forecasting website using input and a Weather api showing the forecast for the next 5 days",
  },
  {
    id: 5,
    name: "Employee Management System",
    image: "/assets/images/manyportfolios.png",
    alt: "a website showing the result of said CLI input rendered onto a website using cards",
    link: "https://github.com/azrazel95/manyportfolios",
    githublink: "https://github.com/azrazel95/cms-for-dummies",
    description:
      "A CMS style employee management system using CLI questions to create a user friendly website displaying information about said employees",
  },
];
// application component using browserrouter, inserting navtabs and linking to its associated pages, telling it what to render on corresponding link
export default function PortfolioContainer() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavTabs />
          <Routes>
            <Route exact path="" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* rendering projects as projects */}
            <Route path="projects" element={<Projects projects={projects} />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
