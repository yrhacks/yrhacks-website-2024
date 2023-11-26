import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <main
      id="about"
      data-aos="fade-up"
      className="w-screen py-28 flex flex-col justify-center items-start bg-transparent px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-2xl md:text-3xl text-violet-100/80 font-bold">
        YRHacks is a YRDSB{" "}
        <span className="gradient-purple text-transparent !bg-clip-text font-bold">
          Hackathon
        </span>{" "}
        run by students, for students.
      </h2>
      <p className="text-violet-100/80 text-lg font-medium mt-8 w-full">
        Interested in participating in YRHacks 2024? Stay tuned for sign-ups in
        Spring 2024 by joining our{" "}
        <Link href="/#contact">
          <span className="hover:font-bold text-lg duration-100 ease-in-out gradient-purple text-transparent !bg-clip-text cursor-pointer">
            mailing list!
          </span>
        </Link>
      </p>
      <p className="text-violet-100/80 text-lg font-medium mt-4 w-full">
        Interested in becoming a sponsor?{" "}
        <Link href="/#contact">
          <span className="hover:font-bold text-lg duration-100 ease-in-out gradient-purple text-transparent !bg-clip-text cursor-pointer">
            Contact us
          </span>
        </Link>{" "}
        and we&apos;ll get back to you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-24 gap-y-16 gap-x-5">
        <div className="w-full flex flex-col justify-start items-center">
          <h3 className="text-5xl lg:text-6xl font-bold font-helvetica text-center gradient-purple !bg-clip-text text-transparent">
            350
          </h3>
          <p className="text-violet-100/80 tracking-wider text-lg text-center leading-6 pt-4">
            students from 25+ schools
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <h3 className="text-5xl lg:text-6xl font-bold font-helvetica text-center gradient-purple !bg-clip-text text-transparent">
            70+
          </h3>
          <p className="text-violet-100/80 tracking-wider text-lg text-center leading-6 pt-4">
            projects submitted
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <h3 className="text-5xl lg:text-6xl font-bold font-helvetica text-center gradient-purple !bg-clip-text text-transparent">
            25+
          </h3>
          <p className="text-violet-100/80 tracking-wider text-lg text-center leading-6 pt-4">
            mentors and sponsors
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <Image
            src="/assets/img/icons/tools.svg"
            alt="tools"
            width={110}
            height={110}
          />
          <p className="text-violet-100/80 tracking-wider text-md md:text-lg text-center leading-6 pt-4">
            Participate in over a dozen workshops to learn various skills such
            as web development and graphic design, as well as fun activities!
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <Image
            src="/assets/img/icons/globe.svg"
            alt="globe"
            width={110}
            height={110}
          />
          <p className="text-violet-100/80 tracking-wider text-md md:text-lg text-center leading-6 pt-4">
            Network with industry professionals and learn about the latest
            trends in technology!
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <Image
            src="/assets/img/icons/leaf.svg"
            alt="leaf"
            width={110}
            height={110}
          />
          <p className="text-violet-100/80 tracking-wider text-md md:text-lg text-center leading-6 pt-4">
            Meet other talented students and work together to create something
            amazing, and win cool prizes and swag!
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
