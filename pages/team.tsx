import React from "react";
import { NextPage } from "next";

import Nav from "../components/nav";
import Team from "../components/team";
import Partners from "../components/partners";
import Footer from "../components/footer";
import ParticlesBackground from "../components/particles";

export const About: NextPage = () => {
  return (
    <main className="w-screen bg-transparent overflow-y-hidden">
      <ParticlesBackground />
      <Nav />
      <header
        id="team"
        className="w-screen h-screen flex flex-col justify-center items-center px-5 md:px-10 lg:px-48 pt-10"
      >
        <h1
          data-aos="fade-up"
          className="text-center text-4xl md:text-6xl font-bold w-full pb-6 font-helvetica text-slate-50"
        >
          Our Team
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay={500}
          className="text-center text-xl md:text-4xl font-bold font-helvetica text-slate-50"
        >
          Meet the incredible team behind{" "}
          <span className="!bg-clip-text text-transparent gradient-purple">
            YRHacks!
          </span>
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay={1000}
          className="flex flex-row justify-between items-start flex-wrap px-6 lg:px-24 mt-10"
        >
          <p className="text-center text-lg font-helvetica text-slate-50">
            We are a group of high school students from across York Region who
            are passionate about technology and innovation.
          </p>
          <p className="text-center text-lg font-helvetica text-slate-50 mt-6">
            We are working very hard to bring you an awesome hackathon
            experience this year!
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
