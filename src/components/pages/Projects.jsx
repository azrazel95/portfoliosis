import React from "react";

const Project = (props) => {
  
  return (
    <>
      <div >
      <h3 className="text-2xl  p-1 bg-gray-700  text-center rounded-lg m-5 text-white font-bold ">Projects</h3>
      <ol>
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
