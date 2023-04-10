import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiFileAccount } from "@mdi/js";
import { mdiAccountGroup } from "@mdi/js";
import { mdiVectorLink } from "@mdi/js";
import { Link } from "react-router-dom";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <header className="sm:w-auto md:w-full bg-gray-700">
        <nav >
          <div className="container py-4 flex justify-between items-center">
            <h1 className="md:text-2xl sm:text-lg m-2 font-bold text-gray-50">
              Benjamin Sprenger
            </h1>
            <section className="MOBILE-MENU flex lg:hidden">
            <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-400"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON  absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN sticky flex bg-inherit flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/projects">Projects</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <div className=" md:text-lg sm:text-sm flex">
              <div className="flex text-white items-center ">
                <span>
                  <Icon
                    className="m-1 text-yellow-400"
                    path={mdiAccount}
                    size={1}
                  />
                </span>

                <Link to="/" className="text-gray-50  hover:text-yellow-400">About</Link>
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
        </ul>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: gray;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
         
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavTabs;
