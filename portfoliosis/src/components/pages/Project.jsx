import React from "react";

const Project = (props) => {
  const { name, image, alt, link, description } = props;
  return (
    <>
      {/* component */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src={image}
                alt={alt}
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href={link}
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  {name}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
