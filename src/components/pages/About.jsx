
// importing react
import React from "react";
// about component/landing page
const About = () => {
  return (
    <>
     <div className="lg:max-w-lg card sm:ml-0 sm:my-20 py-4 px-10 bg-gray-600 shadow-lg sm:w-full my-48 rounded-lg ">
        <div className="flex justify-center md:justify-end  ">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-yellow-300"
           
            src="/assets/images/profile.jpg"
            alt="an image of the portfolio creator"
          />
        </div>
        <div>
          <h2 className="text-white text-3xl  font-semibold">Hello World!</h2>
          <p className="mt-2 text-white">Welcome to my Portfolio;</p>
          <p className="mt-2 text-white">
            I'm Benjamin Sprenger, originally from Switzerland but now based in
            the United States after some years of global travels. Despite a
            successful career as an electrician, my passion for programming and
            software engineering has led me to pursue my dream of creating
            stunning real-time applications. As such, I'm excited to showcase my
            portfolio and share my love for crafting beautiful software
            experiences.
          </p>
        </div>
        <div className="flex  justify-end mt-4"></div>
      </div>
    </>
  );
};

export default About;
