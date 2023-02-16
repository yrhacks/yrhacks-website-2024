import { useState, useEffect } from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import Countdown from "../countdown";
import ParticlesBackground from "../particles";

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
  }, [launchDate]);

  return (
    <header className="relative w-screen h-screen flex flex-col justify-center items-start bg-transparent pt-20 px-5 md:px-10 lg:px-48">
      <div className="bg-transparent z-10 w-full">
        <p
          data-aos="fade-up"
          className="text-sm font-semibold text-slate-50/50"
        >
          SPRING 2023
        </p>
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl lg:text-7xl font-bold my-1 font-helvetica text-violet-100/80"
        >
          YRHacks
        </h1>
        <p
          data-aos="fade-up"
          className="text-xl font-semibold italic mb-4 text-violet-100/80"
        >
          {begun ? "has begun!" : "is in..."}
        </p>
        <Countdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <a
          data-aos="fade-up"
          data-aos-delay="700"
          href="https://forms.gle/jLf71qSFpz5zTw2b8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm lg:text-xl mt-8 text-violet-100/80"
        >
          Register now!
        </a>
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex flex-row items-center w-full mt-6"
        >
          <MdLocationOn className="text-xl lg:text-2xl mr-2 text-violet-100/80" />
          <p className="text-sm lg:text-lg font-semibold text-violet-100/80">
            Bill Crothers S.S. (In-person + Virtual!)
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex flex-row items-center w-full mt-3"
        >
          <MdCalendarToday className="text-xl lg:text-2xl mr-2 text-violet-100/80" />
          <p className="text-sm lg:text-lg font-semibold text-violet-100/80">
            March 3-4, 2023
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
