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
    <>
      <header className="w-screen h-screen flex flex-col justify-center items-start bg-slate-950 pt-10 px-5">
        <div className="absolute top-48 right-0 w-48 h-48 rounded-full bg-blue-600/30 blur-[100px]" />
        <div className="absolute bottom-40 left-0 w-48 h-48 rounded-full bg-rose-600/20 blur-[100px]" />
        <p className="text-sm font-semibold text-white/50">SPRING 2023</p>
        <h1 className="text-5xl font-bold my-1 font-helvetica">YRHacks</h1>
        <p className="text-xl font-semibold mb-4">
          {begun ? "has begun!" : "is in..."}
        </p>
        <Countdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <p className="text-sm mt-8">
          Registrations for YRHacks 2023 will open in January 2023. Stay tuned!
        </p>
        <div className="flex flex-row items-center w-full mt-6">
          <MdLocationOn className="text-xl mr-2" />
          <p className="text-sm font-semibold">
            Richmond Green S.S. (+Virtual)
          </p>
        </div>
        <div className="flex flex-row items-center w-full mt-3">
          <MdCalendarToday className="text-xl mr-2" />
          <p className="text-sm font-semibold">March 3-4</p>
        </div>
      </header>
    </>
  );
};

export default Hero;
