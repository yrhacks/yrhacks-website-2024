import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-screen h-screen flex flex-col justify-center items-center bg-slate-700 px-5"
    >
      <h2 className="text-4xl font-bold w-full">Who are we?</h2>
      <div>
        <p className="w-full text-xl font-semibold mb-5">
          A YRDSB <span className="gradient-purple">Hackathon</span> run by{" "}
          <span className="gradient-pumpkin">students</span> for{" "}
          <span className="gradient-teal">students</span>!
        </p>
      </div>
    </div>
  );
};

export default About;
