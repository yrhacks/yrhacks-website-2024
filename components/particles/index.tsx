import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {}, []);

  const options: any = {
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      number: {
        value: 20,
        limit: 30,
        density: {
          enable: true,
          value_area: 400,
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
          speed: 1,
          opacityMin: 0.2,
          sync: false,
        },
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: true,
          speed: 10,
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
        speed: 3,
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
    backgroundMask: {
      enable: true,
      cover: {
        color: {
          value: {
            r: 0,
            g: 0,
            b: 0,
          },
        },
        opacity: 0.85,
      },
    },
    detectRetina: true,
    fpsLimit: 60,
    background: {
      image: "url('/assets/img/ParticlesBackground.svg')",
    },
  };

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      className="w-full h-full absolute"
      options={options}
    />
  );
};

export default ParticlesBackground;
