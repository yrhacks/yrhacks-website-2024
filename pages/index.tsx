import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ParticlesBackground from "../components/particles";

const Nav = dynamic(() => import("../components/nav"));
const Hero = dynamic(() => import("../components/hero"));
const About = dynamic(() => import("../components/about"));
const Projects = dynamic(() => import("../components/projects"));
const Contact = dynamic(() => import("../components/contact"));
const Footer = dynamic(() => import("../components/footer"));

const Home: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <ParticlesBackground />
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
