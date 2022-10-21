import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";

const Nav = dynamic(() => import("../components/nav"));
const Hero = dynamic(() => import("../components/hero"));
const About = dynamic(() => import("../components/about"));
const Faq = dynamic(() => import("../components/faq"));
const Partners = dynamic(() => import("../components/partners"));
const Contact = dynamic(() => import("../components/contact"));
const Footer = dynamic(() => import("../components/footer"));

const Home: NextPage = () => {
  return (
    <main className="w-screen h-full bg-slate-950 relative body-container">
      <Suspense>
        <Nav />
      </Suspense>
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <Partners />
      </Suspense>
      <Suspense>
        <Faq />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
