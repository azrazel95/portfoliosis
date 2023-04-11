// importing react, our css file and portfoliocontainer component
import React from "react";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer.jsx";



// react component overlay
function App() {
  return (
    <div className="App ">
      <PortfolioContainer />
    </div>
  );
}

export default App;
