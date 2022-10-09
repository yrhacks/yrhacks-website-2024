import { useState, useEffect } from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import { TimerContainer } from "../countdown/TimerContainer";

const Hero = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // launch date: March 03, 2023
  const launchDate = new Date("2023-03-03T04:00:00Z").getTime();

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const until = launchDate - now;

      const newDays = Math.floor(until / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor((until % (1000 * 60 * 60)) / (1000 * 60));
      const newSeconds = Math.floor((until % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (until <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <header className="w-screen h-screen flex flex-col justify-center items-start bg-slate-950 pt-10 px-5">
      <h1 className="w-full text-5xl font-bold mb-3">YRHacks</h1>
      <p className="text-xl font-semibold">is in...</p>
      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <p className="text-sm mt-5">
        Registrations for YRHacks 2023 will open in January 2023. Stay tuned!
      </p>
      <div className="flex flex-row items-center mt-10">
        <MdLocationOn className="text-2xl mr-2" />
        <p className="text-sm">Richmond Green S.S. (+Virtual)</p>
      </div>
      <div className="flex flex-row items-center mt-2">
        <MdCalendarToday className="text-2xl mr-2" />
        <p className="text-sm">March 3-4</p>
      </div>
    </header>
  );
};

export default Hero;
