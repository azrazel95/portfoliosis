import React from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiFileAccount } from "@mdi/js";
import { mdiAccountGroup } from "@mdi/js";
import { mdiVectorLink } from "@mdi/js";
import { Link } from "react-router-dom";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
    <>
      <header className="w-full bg-gray-700">
        <nav >
          <div className="container py-4 flex justify-between items-center">
            <h1 className="text-2xl m-2 font-bold text-gray-50">
              Benjamin Sprenger
            </h1>
            <div className="flex">
              <div className="flex text-white items-center ">
                <span>
                  <Icon
                    className="m-1 text-yellow-400"
                    path={mdiAccount}
                    size={1}
                  />
                </span>

                <Link to="/" className="text-gray-50 hover:text-yellow-400">About</Link>
              </div>
              <div className="flex text-white items-center ">
                <span>
                  <Icon
                    className="m-1 text-yellow-400"
                    path={mdiVectorLink}
                    size={1}
                  />
                </span>
                <Link className="text-gray-50 hover:text-yellow-400" to="/projects">Projects</Link>
              </div>
              <div className="flex text-white items-center ">
                <span>
                  <Icon
                    className="m-1  text-yellow-400"
                    path={mdiAccountGroup}
                    size={1}
                  />
                </span>
                <Link className="text-gray-50 hover:text-yellow-400" to="/contact">Contact</Link>
              </div>
              <div className="flex text-white items-center ">
                <span>
                  <Icon
                    className="m-1 text-yellow-400"
                    path={mdiFileAccount}
                    size={1}
                  />
                </span>
                <Link className="text-gray-50 hover:text-yellow-400" to="/resume">Resume</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavTabs;
