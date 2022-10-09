import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Faq from "../components/faq";

import Hero from "../components/hero";
import Nav from "../components/nav";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="w-full h-full">
        <Nav />
        <Hero />
        <About />
        <Faq />
        <Partners />
        <Contact />
      </main>
      <footer className="w-full flex flex-col items-center pb-8 bg-slate-950">
        <p className="text-sm pb-2">
          Copyright © 2022{" "}
          <span className="gradient-purple text-transparent !bg-clip-text font-bold">
            YRHacks
          </span>
        </p>
        <p className="text-sm">All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
