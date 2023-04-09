import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const projects = [
  {
    id: 1,
    name: "bread and circus",
    image: "./assets/breadandcircus.png",
    alt: "an image showing a blog style website", 
    link: "https://breadandcircus.herokuapp.com/",
    description: "A blog-style website"
  },
  {
    id: 2,
    name: "Notice Taker",
    image: "./assets/noticed.png",
    alt: "an image showing a website for taking notes", 
    link: "https://notice-taker.herokuapp.com/",
    description:"A note taking website for when you need a notepad on the go"
  },
  {
    id: 3,
    name: "getOutdoorsFlorida",
    image: "./assets/springhunters.png",
    alt: "an image showing a website displaying a list of springs", 
    link: "https://springhunters1.herokuapp.com/",
    description: "A website aiming to make it easier to find springs near you!"
  },
  {
    id: 4,
    name: "Cloudy Prophecies",
    image: "./assets/cloudyprohpecies.png",
    alt: "A website displaying the weather in a city that has been searched for", 
    link: "https://azrazel95.github.io/cloudyprophecies/",
    description:"A Weather forecasting website using input and a Weather api showing the forecast for the next 5 days"
  },
  {
    id: 5,
    name: "employee management",
    image: "./assets/manyportfolios.png",
    alt: "a website showing the result of said CLI input rendered onto a website using cards", 
    link: "https://github.com/azrazel95/manyportfolios",
    description: "A CMS style employee management system using CLI questions to create a user friendly website displaying information about said employees"
  },
]
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = (props) => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects projects = {projects}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    } else {
    return <About />;}
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      {/* <Header /> */}
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
