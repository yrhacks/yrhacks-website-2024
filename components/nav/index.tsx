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
    <div className="relative z-50 select-none">
      <div className="w-full px-5 md:px-10 lg:px-48 py-4 lg:py-6 fixed top-0 bg-slate-950/70 backdrop-blur-2xl">
        <nav className="w-full flex flex-row justify-between items-center z-20">
          <Link
            className="h-full w-auto flex justify-center items-center"
            href="/#"
          >
            <Image
              src="/assets/logos/logo-transparent.svg"
              alt="YRHacks Logo"
              width={60}
              height={60}
              layout={"intrinsic"}
              className="cursor-pointer logo-spin"
            />
          </Link>
          <div>
            {width < 768 ? (
              isOpen ? (
                <IoCloseOutline
                  className="text-3xl text-slate-50 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <IoMenuOutline
                  className="text-3xl text-slate-50 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )
            ) : (
              <ul className="w-full flex items-center space-x-4 xl:space-x-6">
                {["Home", "About", "Partners", "FAQ", "Contact"].map(
                  (item: string, index: number) => (
                    <li key={item}>
                      <Link href={index > 0 ? "/#" + item.toLowerCase() : "/#"}>
                        <span className="text-slate-50 text-sm lg:text-base font-semibold duration-300 ease-in-out transition-all hover:bg-slate-50/10 rounded-md bg-transparent py-2 px-3 cursor-pointer">
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
