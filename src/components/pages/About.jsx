import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <>
      <div className="max-w-md py-4 px-8 bg-gray-600 shadow-lg mx-175 my-50 rounded-lg ">
        <div className="flex justify-center md:justify-end -mt-16 ">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-yellow-300"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 className="text-white text-3xl  font-semibold">Hello World!</h2>
          <p className="mt-2 text-white">Welcome to my Portfolio;</p>
        </div>
        <div className="flex  justify-end mt-4"></div>
      </div>
    </>
  );
};

export default About;
