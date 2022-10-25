import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-screen flex flex-col items-center pb-14 pt-20 bg-transparent z-10"
    >
      <p className="text-sm pb-2 text-slate-50">
        Copyright © 2022{" "}
        <span className="gradient-purple text-transparent !bg-clip-text font-bold">
          YRHacks
        </span>
      </p>
      <p className="text-sm text-slate-50">All rights reserved</p>
    </footer>
  );
};

export default Footer;
