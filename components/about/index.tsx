import React from "react";

const About = () => {
  return (
    <main
      id="about"
      data-aos="fade-up"
      className="z-50 w-screen py-32 flex flex-col justify-center items-start bg-transparent px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-2xl md:text-3xl text-slate-50 font-bold">
        YRHacks is a YRDSB{" "}
        <span className="gradient-teal text-transparent !bg-clip-text font-bold">
          Hackathon
        </span>{" "}
        run by students, for students.
      </h2>
      <p className="text-slate-50 text-lg font-medium mt-8">
        Every year, we provide a safe space where 250+ students from across York
        Region can come together to attend workshops, network with industry
        professionals, learn new skills, and build something amazing!
      </p>
      <p className="text-slate-50 text-lg font-medium mt-8 w-full">
        Interested in participating in YRHacks 2023? Stay tuned for sign-ups in
        Spring 2023 by joining our{" "}
        <a
          href="/#contact"
          className="text-slate-50 underline hover:underline text-lg duration-400 transition-all ease-in-out font-medium gradient-teal hover:text-transparent !bg-clip-text cursor-pointer"
        >
          mailing list!
        </a>
      </p>
      <p className="text-slate-50 text-lg font-medium mt-8 w-full">
        Interested in becoming a sponsor?{" "}
        <a
          href="/#contact"
          className="text-slate-50 underline hover:underline text-lg duration-400 transition-all ease-in-out font-medium gradient-teal hover:text-transparent !bg-clip-text cursor-pointer"
        >
          Contact us
        </a>{" "}
        and we'll get back to you!
      </p>
    </main>
  );
};

export default About;
