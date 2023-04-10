import React, { useState, useEffect } from "react";

const Navigation = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <ol className="relative border-l rounded-lg my-10 p-3 bg-transparent bg-slate-400 border-gray-200 dark:border-gray-700">
          <li className="m-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Introduction:
            </h3>
            <p className="mb-4 text-base font-normal text-gray-900 dark:text-gray-400">
              As a professional, I possess an array of programming competencies
              that allow me to excel in various technology-based projects. I
              have expertise in various languages, frameworks, and databases,
              which enables me to solve problems in diverse domains.
              Additionally, I bring a unique perspective to the table with my
              previous experience as a lead electrician and pastry cook.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Programming Competencies:
            </h3>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
              Node.js: Node.js, the Serverside runtime environment for javascript, has enabled me to build RESTful API's and real time high performance applications that are easy to scale.
            </p><br></br>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
            Express.js: With my experience in Express.js, a popular Node.js framework, I can develop web applications and APIs. I am proficient in handling routing, middleware, and error handling in Express.js.
            </p><br></br>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
            Laravel: Laravel is my preferred PHP framework for building web applications. I have hands-on experience in developing web applications with Laravel, including authentication, routing and middleware.
            </p><br></br>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
            React: React is currently my favourite Javascript framework, as i am learning React Native enabling me to build reusable UI components and exciting Applications. 
            </p><br></br>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
            MongoDB and MySQL: I have experience in both relational and non-relational databases. I can design and implement database schemas, write complex queries, and optimize database performance.
            </p><br></br>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
              JQuery: I have hands on experience with JQuery, and used it briefly for a few projects at the beginning of my programming journey.
            </p><br></br>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
              HTML, CSS and they're frameworks:
              I have enjoyed leveraging bootstrap and tailwinds to quickly create scalable shops and contemporary websites.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Resume
            </h3>
            <p className="text-base font-normal text-gray-900 dark:text-gray-400">
              For your convenience, feel free to download my Resume! <a className="rounded-lg  bg-gray-500 text-yellow-300 relative overflow-hidden" href="http://www.bencoded.dev/benjamin-Sprenger-CV.pdf" download> click-me</a>
          
            </p>
            </li>
        </ol>
      </div>
    </>
  );
};

export default Navigation;
