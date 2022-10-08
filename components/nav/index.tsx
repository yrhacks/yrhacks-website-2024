import React, { useState } from "react";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";

import Drawer from "./drawer";

import useWindowSize from "../../hooks/useWindowSize";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();
  return (
    <>
      <nav className="w-full h-16 flex flex-row justify-between items-center px-5 py-10 fixed top-0 z-20">
        <div className="h-full w-auto flex justify-center items-center">
          <Image
            src="/assets/logo.png"
            alt="YRHacks Logo"
            width={50}
            height={50}
            layout={"intrinsic"}
          />
        </div>
        <div>
          {width < 768 ? (
            isOpen ? (
              <MdClose
                className="text-4xl text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <MdMenu
                className="text-4xl text-white cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )
          ) : (
            <ul className="flex flex-row items-center">
              <li className="text-white text-sm font-semibold mr-5">Home</li>
              <li className="text-white text-sm font-semibold mr-5">About</li>
              <li className="text-white text-sm font-semibold mr-5">FAQ</li>
              <li className="text-white text-sm font-semibold mr-5">Contact</li>
            </ul>
          )}
        </div>
      </nav>

      {width < 768 ? <Drawer open={isOpen} /> : null}
    </>
  );
};

export default Nav;
