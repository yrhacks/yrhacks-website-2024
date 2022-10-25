import React from "react";
import Link from "next/link";
import { FaGlobe, FaLeaf, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <main
      id="about"
      data-aos="fade-up"
      className="w-screen py-32 flex flex-col justify-center items-start bg-transparent px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-2xl md:text-3xl text-slate-50/90 font-bold">
        YRHacks is a YRDSB{" "}
        <span className="gradient-teal text-transparent !bg-clip-text font-bold">
          Hackathon
        </span>{" "}
        run by students, for students.
      </h2>
      <p className="text-slate-50/90 text-lg font-medium mt-8 w-full">
        Interested in participating in YRHacks 2023? Stay tuned for sign-ups in
        Spring 2023 by joining our{" "}
        <Link href="/#contact">
          <span className="font-bold underline text-lg duration-400 transition-all ease-in-out gradient-teal text-transparent !bg-clip-text cursor-pointer">
            mailing list!
          </span>
        </Link>
      </p>
      <p className="text-slate-50/90 text-lg font-medium mt-8 w-full">
        Interested in becoming a sponsor?{" "}
        <Link href="/#contact">
          <span className="font-bold text-lg duration-400 transition-all ease-in-out gradient-teal text-transparent !bg-clip-text cursor-pointer">
            Contact us
          </span>
        </Link>{" "}
        and we&apos;ll get back to you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        <div className="w-full flex flex-col justify-start items-center py-10 px-5">
          <h3 className="text-5xl lg:text-6xl text-slate-50/90 font-bold font-helvetica text-center">
            300+
          </h3>
          <p className="text-slate-50/90 tracking-wider text-lg text-center leading-7 pt-4">
            students from XX+ schools
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center py-10 px-5">
          <h3 className="text-5xl lg:text-6xl text-slate-50/90 font-bold font-helvetica text-center">
            50+
          </h3>
          <p className="text-slate-50/90 tracking-wider text-lg text-center leading-7 pt-4">
            projects submitted
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center py-10 px-5">
          <h3 className="text-5xl lg:text-6xl text-slate-50/90 font-bold font-helvetica text-center">
            30+
          </h3>
          <p className="text-slate-50/90 tracking-wider text-lg text-center leading-7 pt-4">
            mentors and sponsors
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center py-10 px-5">
          <FaTools className="text-5xl lg:text-6xl text-slate-50/90" />
          <p className="text-slate-50/90 tracking-wider text-lg text-center leading-7 pt-4">
            Participate in dozens of workshops where students can learn various
            skills such as web development, graphic design, and more!
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center py-10 px-5">
          <FaGlobe className="text-5xl lg:text-6xl text-slate-50/90" />
          <p className="text-slate-50/90 tracking-wider text-lg text-center leading-7 pt-4">
            Network with industry professionals and learn about the latest
            trends in technology!
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center py-10 px-5">
          <FaLeaf className="text-5xl lg:text-6xl text-slate-50/90" />
          <p className="text-slate-50/90 tracking-wider text-lg text-center leading-7 pt-4">
            Meet new students and work together to create something amazing, and
            earn cool prizes and swag!
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
