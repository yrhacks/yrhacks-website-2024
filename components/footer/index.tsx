import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-screen flex flex-col items-center py-12 bg-transparent z-10"
    >
      <p className="text-sm pb-2 text-violet-100/80">
        Copyright © 2024{" "}
        <span className="gradient-yrhacks text-transparent !bg-clip-text font-bold">
          YRHacks
        </span>
      </p>
      <p className="text-sm text-violet-100/80">All rights reserved</p>
    </footer>
  );
};

export default Footer;
export const config = { runtime: 'edge' };