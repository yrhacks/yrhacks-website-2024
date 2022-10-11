import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";

const Nav = dynamic(() => import("../components/nav"), { ssr: false });
const Hero = dynamic(() => import("../components/hero"), { ssr: false });
const About = dynamic(() => import("../components/about"), { ssr: false });
const Faq = dynamic(() => import("../components/faq"), { ssr: false });
const Partners = dynamic(() => import("../components/partners"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/contact"), { ssr: false });
const Footer = dynamic(() => import("../components/footer"), { ssr: false });

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
