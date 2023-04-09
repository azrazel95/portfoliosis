import React, { useState, useEffect } from "react";

const Navigation = () => {
  return <>
  <div className="max-w-2xl mx-auto">
    <ol className="relative border-l bg-transparent bg-slate-400 border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Programming Language proficiencies
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          javascript, html, CSS, php, 
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          March 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Marketing UI design in Figma
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          April 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
    </ol>
    
  </div>
  </>;
};

export default Navigation;
