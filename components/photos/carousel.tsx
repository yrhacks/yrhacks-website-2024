import React, { useState, useEffect, useCallback } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import useEmblaCarousel from "embla-carousel-react";
import { photos } from "../../data/photos";
import Image from "next/image";

const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative p-2 w-full bg-transparent flex flex-row flex-nowrap justify-between items-center">
      <button
        disabled={!prevBtnEnabled}
        className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        name="Previous Photo"
      >
        <TiChevronLeft
          className="text-violet-100/80 hover:text-slate-50 duration-200 text-3xl lg:text-7xl mx-2"
          onClick={scrollPrev}
        />
      </button>
      <div className="overflow-hidden w-full" ref={viewportRef}>
        <div className="flex select-none ">
          {photos.map((photo, index) => (
            <div
              className="relative min-w-full flex flex-col items-center justify-start"
              key={index}
            >
              <h3
                className={
                  "text-xl font-helvetica lg:text-3xl mb-2 lg:mb-4 font-bold text-center !bg-clip-text text-transparent gradient-purple"
                }
              ></h3>
              <div
                className={
                  "relative flex items-center justify-center p-2 gradient-purple"
                }
              >
                <Image
                  src={photo.image}
                  alt={photo.id.toString()}
                  layout="intrinsic"
                  objectFit="cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={!nextBtnEnabled}
        className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        name="Next Photo"
      >
        <TiChevronRight
          className="text-violet-100/80 hover:text-slate-50 duration-200 text-3xl lg:text-7xl mx-2"
          onClick={scrollNext}
        />
      </button>
    </div>
  );
};

export default Carousel;
