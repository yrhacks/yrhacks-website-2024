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
      <div className="w-full px-5 md:px-10 lg:px-48 py-4 lg:py-6 fixed top-0 bg-slate-950/80 backdrop-blur-2xl">
        <nav className="w-full flex flex-row justify-between items-center z-20">
          <div className="h-full w-auto flex justify-center items-center">
            <Image
              src="/assets/logo.png"
              alt="YRHacks Logo"
              width={width < 768 ? 35 : 60}
              height={width < 768 ? 35 : 60}
              layout={"intrinsic"}
            />
          </div>
          <div className="md:w-1/2">
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
              <ul className="w-full flex flex-row items-center justify-evenly">
                {["Home", "About", "FAQ", "Partners", "Contact"].map(
                  (item: string, index: number) => (
                    <li>
                      <a
                        href={index > 0 ? "/#" + item.toLowerCase() : "/#"}
                        className="text-white text-sm lg:text-base font-medium"
                        key={item}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
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
