import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-950">
      <Head>
        <title>YRHacks</title>
        <meta
          name="description"
          content="YRHacks - A YRDSB Hackathon run by students for students!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
