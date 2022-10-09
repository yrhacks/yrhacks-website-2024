import { useState, useEffect } from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import Countdown from "../countdown";

const Hero = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [begun, setBegun] = useState(false);

  // launch date: March 03, 2023
  const launchDate = new Date("2023-03-03T04:00:00Z").getTime();

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const until = launchDate - now;

      setDays(Math.floor(until / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((until % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((until % (1000 * 60)) / 1000));

      if (until <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setBegun(true);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <header className="w-screen h-screen flex flex-col justify-center items-start bg-slate-950 pt-10 px-5 md:px-10 lg:px-48">
      <div className="absolute bottom-24 lg:bottom-16 left-0 w-48 h-48 lg:w-80 lg:h-80 rounded-tr-full rounded-bl-full rounded-tl-md rounded-br-md bg-rose-600/30 blur-[150px]" />
      <div className="absolute top-12 lg:top-64 right-24 w-48 h-48 lg:w-64 lg:h-64 rounded-tr-full rounded-bl-full rounded-tl-md rounded-br-md bg-blue-600/40 blur-[130px]" />
      <p className="text-sm font-semibold text-white/50">SPRING 2023</p>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold my-1 font-helvetica">
        YRHacks
      </h1>
      <p className="text-xl font-semibold italic mb-4">
        {begun ? "has begun!" : "is in..."}
      </p>
      <Countdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <p className="text-sm lg:text-xl mt-8">
        Registrations for YRHacks 2023 will open in January 2023. Stay tuned!
      </p>
      <div className="flex flex-row items-center w-full mt-6">
        <MdLocationOn className="text-xl lg:text-2xl mr-2" />
        <p className="text-sm lg:text-lg font-semibold">
          Richmond Green S.S. (+Virtual)
        </p>
      </div>
      <div className="flex flex-row items-center w-full mt-3">
        <MdCalendarToday className="text-xl lg:text-2xl  mr-2" />
        <p className="text-sm lg:text-lg font-semibold">March 3-4 2023</p>
      </div>
    </header>
  );
};

export default Hero;
