import React from "react";
import { NextPage } from "next";

import Nav from "../components/nav";
import Team from "../components/team";
import Partners from "../components/partners";
import Footer from "../components/footer";
import ParticlesBackground from "../components/particles";

export const About: NextPage = () => {
  return (
    <main className="w-screen bg-slate-950 overflow-y-hidden">
      <ParticlesBackground />
      <Nav />
      <header
        id="about"
        className="w-screen h-screen flex flex-col justify-center items-center px-5 md:px-10 lg:px-48"
      >
        <h1 className="text-center text-6xl font-bold w-full pb-6 font-helvetica text-slate-50">
          About
        </h1>
        <div className="flex flex-row justify-between items-start flex-wrap px-6 lg:px-24">
          <p className="text-center text-lg font-helvetica text-slate-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl
          </p>
        </div>
      </header>
      <Team />
      <Partners />
      <Footer />
    </main>
  );
};

export default About;
