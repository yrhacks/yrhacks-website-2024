import { useState, useEffect } from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import Countdown from "../countdown";
import Image from "next/image";
import ParticlesBackground from "../particles";

const Hero = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [begun, setBegun] = useState(false);
  const [ended, setEnded] = useState(false);
  const [closed, setClosed] = useState(false);

  // launch date: April 17, 2024
  let launchDate = new Date("2024-04-17T23:00:00Z").getTime();
  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      let until = launchDate - now;

      if (until <= 0) {
        launchDate = new Date("2024-04-17T02:00:00Z").getTime();
        setBegun(true);
      }
      until = launchDate - now;
      if (begun && until <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setEnded(true);
        setClosed(true);
        return;
      }
      setDays(Math.floor(until / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((until % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((until % (1000 * 60)) / 1000));
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [seconds]);

  return (
    <header className="relative w-screen h-screen flex flex-col justify-center items-start bg-transparent pt-20 px-5 md:px-10 lg:px-48">
      <div className="bg-transparent z-10 w-full ">
        <div className="flex items-center justify-center flex-col gap-10">
          <p
            data-aos="fade-up"
            className="text-sm font-semibold text-slate-50/50"
          >
            SPRING 2024
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-5xl md:text-6xl lg:text-7xl font-bold my-1 font-helvetica text-violet-100/80"
          >
            <div className="long-logo-back">
              <Image
                className="long-logo"
                src="/assets/logos/logo-long.svg"
                alt="YRHacks Logo Long"
                width={220}
                height={63}
                layout={"intrinsic"}
              />
            </div>
          </h1>
          <p
            data-aos="fade-up"
            className="text-xl font-semibold italic mb-4 text-violet-100/80"
          >
            {begun ? (ended ? "has ended!" : "ends in...") : "is in..."}
          </p>
          {!ended && (
            <Countdown
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col justify-start items-start"
        >
          <div className="gradient-yrhacks rounded-full px-8 py-3 flex items-center justify-center">
            <p className="text-sm lg:text-lg text-violet-100/80 font-bold text-center">
              {begun
                ? ended
                  ? "Thank you for attending! See you next year!"
                  : "YRHacks has begun!"
                : closed
                ? "Registration is now closed!"
                : "Registration is now open!"}
            </p>
          </div>
          <div className="flex flex-row items-center w-full mt-6">
            <MdLocationOn className="text-xl lg:text-2xl mr-2 text-violet-100/80" />
            <p className="text-sm lg:text-lg font-semibold text-violet-100/80">
              Dr. Bette Stephenson Centre for Learning (Virtual + In-person!)
            </p>
            <></>
          </div>
          <div className="flex flex-row items-center w-full mt-3">
            <MdCalendarToday className="text-xl lg:text-2xl mr-2 text-violet-100/80" />
            <p className="text-sm lg:text-lg font-semibold text-violet-100/80">
              April 17 (Virtual) to 18 (In-person), 2024
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
