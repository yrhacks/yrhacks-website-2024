import type { NextPage } from "next";

import Head from "next/head";

import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Faq from "../components/faq";
import Partners from "../components/partners";
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>YRHacks</title>
        <meta
          name="description"
          content="YRHacks - A YRDSB Hackathon run by students for students!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-full bg-slate-950">
        <Nav />
        <Hero />
        <About />
        <Faq />
        <Partners />
        <Contact />
      </main>
      <footer className="w-full flex flex-col items-center pb-14 pt-20 bg-slate-950 -z-10">
        <p className="text-sm pb-2 text-slate-50">
          Copyright © 2022{" "}
          <span className="gradient-purple text-transparent !bg-clip-text font-bold">
            YRHacks
          </span>
        </p>
        <p className="text-sm text-slate-50">All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
