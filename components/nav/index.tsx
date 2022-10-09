import React, { useState } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import Drawer from "./drawer";

import useWindowSize from "../../hooks/useWindowSize";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();
  return (
    <div className="relative z-50">
      <div className="w-full p-5 fixed top-0 bg-slate-950/80 backdrop-blur-2xl">
        <nav className="w-full flex flex-row justify-between items-center z-20">
          <div className="h-full w-auto flex justify-center items-center">
            <Image
              src="/assets/logo.png"
              alt="YRHacks Logo"
              width={40}
              height={40}
              layout={"intrinsic"}
            />
          </div>
          <div>
            {width < 768 ? (
              isOpen ? (
                <IoCloseOutline
                  className="text-3xl text-white cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <IoMenuOutline
                  className="text-3xl text-white cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )
            ) : (
              <ul className="flex flex-row items-center">
                <li className="text-white text-sm font-semibold mr-5">Home</li>
                <li className="text-white text-sm font-semibold mr-5">About</li>
                <li className="text-white text-sm font-semibold mr-5">FAQ</li>
                <li className="text-white text-sm font-semibold mr-5">
                  Contact
                </li>
              </ul>
            )}
          </div>
        </nav>
        {width < 768 ? <Drawer open={isOpen} setOpen={setIsOpen} /> : null}
      </div>
    </div>
  );
};

export default Nav;
