import React from "react";

import { mdiEmail } from '@mdi/js';

const Footer = () => {
  return (
    <>
      <footer className=" inset-x-0.bottom-0 w-screen p-4 align-baseline bg-gray-300">
        <div className="text-center">
          <p >Copyright © 2023 - Benjamin Sprenger</p>
          <a className="h-8 w-8 " href="https://www.linkedin.com/in/benjamin-sprenger-8419a3254/">LinkedIn</a> <div></div>
          <a className="h-8 w-8 " href="https://github.com/azrazel95">  Github</a><div></div>
          <a className="h-8 w-8 " href="mailto: beni.sprenger@hotmail.com"> Email</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
