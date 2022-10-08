import React from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";

const Hero = () => {
  return (
    <header className="w-screen h-screen flex flex-col justify-center items-start bg-slate-950 px-5">
      <h1 className="w-full text-5xl font-bold mb-10">YRHacks</h1>
      <h3 className="w-full text-xl font-semibold mb-10">
        A YRDSB <span className="gradient-purple">Hackathon</span> run by{" "}
        <span className="gradient-pumpkin">students</span> for{" "}
        <span className="gradient-teal">students</span>!
      </h3>
      <p className="text-sm">
        Registrations for YRHacks 2023 will open in January 2023. Stay tuned!
      </p>
      <div className="flex flex-row items-center mt-10">
        <MdLocationOn className="text-2xl mr-2" />
        <p className="text-sm">Richmond Green S.S. (+Virtual)</p>
      </div>
      <div className="flex flex-row items-center mt-2">
        <MdCalendarToday className="text-2xl mr-2" />
        <p className="text-sm">March 3-4</p>
      </div>
    </header>
  );
};

export default Hero;
