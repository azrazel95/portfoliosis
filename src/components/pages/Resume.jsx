import React from "react";

const Resume = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <ol className="relative border-l rounded-lg my-10 p-3 bg-gray-600 border-gray-700">
          <li className="m-10 ml-4">
            <div className="absolute w-3 h-3  rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500"></time>
            <h3 className="text-lg font-semibold text-white">
              Introduction:
            </h3>
            <p className="mb-4 text-base font-normal text-gray-300">
              As a professional, I possess an array of programming competencies
              that allow me to excel in various technology-based projects. I
              have expertise in various languages, frameworks, and databases,
              which enables me to solve problems in diverse domains.
              Additionally, I bring a unique perspective to the table with my
              previous experience as a lead electrician and pastry cook.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3  rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>

            <h3 className="text-lg font-semibold text-white">
              Programming Competencies:
            </h3>
            <p className="text-base font-normal text-gray-300">
              Node.js: Node.js, the Serverside runtime environment for javascript, has enabled me to build RESTful API's and real time high performance applications that are easy to scale.
            </p><br></br>
            <p className="text-base font-normal text-gray-300">
            Express.js: With my experience in Express.js, a popular Node.js framework, I can develop web applications and APIs. I am proficient in handling routing, middleware, and error handling in Express.js.
            </p><br></br>
            <p className="text-base font-normal text-gray-300">
            Laravel: Laravel is my preferred PHP framework for building web applications. I have hands-on experience in developing web applications with Laravel, including authentication, routing and middleware.
            </p><br></br>
            <p className="text-base font-normal text-gray-300">
            React: React is currently my favourite Javascript framework, as i am learning React Native enabling me to build reusable UI components and exciting Applications. 
            </p><br></br>
            <p className="text-base font-normal text-gray-300">
            MongoDB and MySQL: I have experience in both relational and non-relational databases. I can design and implement database schemas, write complex queries, and optimize database performance.
            </p><br></br>
            <p className="text-base font-normal text-gray-300">
              JQuery: I have hands on experience with JQuery, and used it briefly for a few projects at the beginning of my programming journey.
            </p><br></br>
            <p className="text-base font-normal text-gray-300">
              HTML, CSS and they're frameworks:
              I have enjoyed leveraging bootstrap and tailwinds to quickly create scalable shops and contemporary websites.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3  rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Resume
            </h3>
            <p className="text-base font-normal text-gray-300">
              For your convenience, feel free to download my Resume!
              <button className="bg-gray-300 ml-10 shadow-lg hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <a href="./assets/document/Benjamin-Sprenger-cv.pdf" download> Download</a>
</button>
            </p>
            </li>
        </ol>
      </div>
    </>
  );
};

export default Resume;
