import React from "react";

const About = () => {
  return (
    <main
      id="about"
      className="w-screen py-32 flex flex-col justify-center items-start bg-transparent px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-2xl md:text-3xl text-slate-50 font-bold">
        YRHacks is a YRDSB{" "}
        <span className="gradient-teal text-transparent !bg-clip-text font-bold">
          Hackathon
        </span>{" "}
        run by students, for students.
      </h2>
      <p className="text-slate-50 text-lg font-medium mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        iusto. Fugit facere consequatur maxime unde quasi, atque deleniti ab
        blanditiis
      </p>
    </main>
  );
};

export default About;
