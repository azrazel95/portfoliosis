import React from "react";


const Footer = () => {
  return (
    <>
      <footer className="bottom-0 footer w-screen p-4 bg-gray-300">
        <div className="text-center text-gray-600">
          <p>Copyright © 2023 - Benjamin Sprenger</p>
          <a
            className="h-8 w-8 "
            href="https://www.linkedin.com/in/benjamin-sprenger-8419a3254/"
          >
            <button className="bg-transparent hover:bg-blue-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
              LinkedIn
            </button>
          </a>{" "}
          <div></div>
          <a className="h-8 w-8 " href="https://github.com/azrazel95">
            {" "}
            <button className="bg-transparent hover:bg-green-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
              Github
            </button>
          </a>
          <div></div>
          <a className="h-8 w-8 " href="mailto: beni.sprenger@hotmail.com">
            {" "}
            <button className="bg-transparent hover:bg-blue-800 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
              Email
            </button>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
