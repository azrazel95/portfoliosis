// importing react
import React from "react";
// running projects through props to generate projects as i add them
const Project = (props) => {
  
  return (
    <>
      <div >
      <h3 className="text-2xl  p-1 bg-gray-700  text-center rounded-lg m-5 text-white font-bold ">Projects</h3>
      <ol>
        {/* mapping over projects */}
        {props.projects.map(project => (
          <li className="border-l-2 mx-10 sm:  border-yellow-300">
            <div className="md:flex flex-start">
              <div className="bg-gray-600 w-6 h-6 flex items-center justify-center rounded-full -ml-2.5">
              </div>
              <div className="block p-6 rounded-lg  bg-gray-700 max-w-screen ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a
                    
                    className="text-2xl text-white hover:text-yellow-300 focus:text-yellow-300 duration-300 transition ease-in-out "
                  >
                    {project.name}
                  </a>
                </div>
                <img src={project.image}></img>
                <div className="projectcontainer">
                <p className="text-white mb-6">
                  {project.description}
                </p>
                <a href={project.link}>
                <button
                  type="button"
                  className="inline-block px-3.5 py-1 border-2 border-yellow-300 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"data-mdb-ripple="true">
                  check the website!
                </button>
                </a>
                <a  href={project.githublink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a></div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </>
  );
};

export default Project;
