import React from "react";

const Hero = () => {
  return (
    <header className="w-screen h-screen flex flex-col justify-center items-center bg-slate-950 px-5">
      <h1 className="w-full text-5xl font-bold mb-10">YRHacks</h1>
      <h3 className="w-full text-xl font-semibold">
        A YRDSB <span className="gradient-purple">Hackathon</span> run by{" "}
        <span className="gradient-pumpkin">students</span> for{" "}
        <span className="gradient-teal">students</span>!
      </h3>
    </header>
  );
};

export default Hero;
