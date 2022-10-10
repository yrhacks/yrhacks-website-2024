import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import Head from "next/head";

const Nav = dynamic(() => import("../components/nav"), {
  ssr: false,
});

const Hero = dynamic(() => import("../components/hero"), {
  ssr: false,
});

const About = dynamic(() => import("../components/about"), {
  ssr: false,
});

const Faq = dynamic(() => import("../components/faq"), {
  ssr: false,
});

const Partners = dynamic(() => import("../components/partners"), {
  ssr: false,
});

const Contact = dynamic(() => import("../components/contact"), {
  ssr: false,
});

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
        <Suspense fallback={`Loading...`}>
          <Nav />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <Hero />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <About />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <Faq />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <Partners />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <Contact />
        </Suspense>
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
