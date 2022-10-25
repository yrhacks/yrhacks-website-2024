import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import ParticlesBackground from "../components/particles";
import Nav from "../components/nav";

const Page: NextPage = () => {
  // 404 page

  const particleProps = {
    particles: {
      number: {
        value: 60,
        limit: 70,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 0.4,
          opacityMin: 0.15,
          sync: false,
        },
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: true,
          speed: 7,
          sizeMin: 10,
          sync: false,
        },
      },
      lineLinked: {
        enable: true,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
  };
  return (
    <main className="w-screen h-screen bg-transparent">
      <ParticlesBackground props={particleProps} />
      <Nav />
      <div className="w-full h-full flex flex-col justify-center items-center px-5">
        <h1 className="font-helvetica text-7xl lg:text-9xl text-purple-200/20 font-bold">
          404
        </h1>
        <h2 className="font-helvetica text-2xl text-center md:text-3xl text-slate-50/80 font-medium mt-5">
          Hmm, there doesn&apos;t seem to be a page here.
        </h2>
        <h3 className="text-xl text-slate-50/80 text-center mt-20">
          Here&apos;s our{" "}
          <Link href="/#">
            <span className="text-transparent font-bold gradient-purple !bg-clip-text cursor-pointer">
              home page
            </span>
          </Link>
          , but feel free to stay and play with the particles if you want :)
        </h3>
      </div>
    </main>
  );
};

export default Page;
