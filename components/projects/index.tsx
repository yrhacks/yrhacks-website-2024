import React from "react";
import Carousel from "./carousel";

const Projects = () => {
  return (
    <main
      id="projects"
      data-aos="fade-up"
      className="w-screen pt-28 flex flex-col justify-center items-start bg-transparent px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-2xl md:text-4xl text-violet-100/80 font-bold font-helvetica mb-10">
        Winners of{" "}
        <span className="text-transparent gradient-purple !bg-clip-text">
          YRHacks 2022
        </span>
      </h2>
      <Carousel />
    </main>
  );
};

export default Projects;
