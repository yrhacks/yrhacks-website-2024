import React, { useState } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import Dropdown from "./Dropdown";

import useWindowSize from "../../hooks/useWindowSize";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();
  return (
    <div className="relative z-50">
      <div className="w-full px-5 md:px-10 lg:px-48 py-4 lg:py-6 fixed top-0 bg-slate-950/70 backdrop-blur-2xl">
        <nav className="w-full flex flex-row justify-between items-center z-20">
          <Link
            className="h-full w-auto flex justify-center items-center"
            href="/#"
          >
            <Image
              src="/assets/Logo.png"
              alt="YRHacks Logo"
              width={width < 768 ? 35 : 60}
              height={width < 768 ? 35 : 60}
              layout={"intrinsic"}
              className="cursor-pointer"
            />
          </Link>
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
                    <li key={item}>
                      <Link href={index > 0 ? "/#" + item.toLowerCase() : "/#"}>
                        <span className="text-white text-sm lg:text-base font-semibold duration-300 ease-in-out transition-all hover:text-transparent gradient-purple !bg-clip-text cursor-pointer">
                          {item}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </nav>
        {width < 768 ? <Dropdown open={isOpen} setOpen={setIsOpen} /> : null}
      </div>
    </div>
  );
};

export default Nav;
