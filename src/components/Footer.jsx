import React from "react";
// import { Link } from "react-router-dom";
import { mdiEmail } from '@mdi/js';

const Footer = () => {
  return (
    <>
      {/* component */}
      <footer className="footer  footer-center w-screen p-4 align-baseline bg-gray-300">
        <div className="text-center">
          <p >Copyright © 2023 - Benjamin Sprenger</p>
          <a className="h-8 w-8 " href="https://www.linkedin.com/in/benjamin-sprenger-8419a3254/">LinkedIn</a> <div></div>
          <a className="h-8 w-8 " href="https://github.com/azrazel95">  Github</a><div></div>
          <a className="h-8 w-8 " href="mailto: beni.sprenger@hotmail.com"> Email</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
