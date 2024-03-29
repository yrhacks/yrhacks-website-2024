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
  const [ended, setEnded] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [registrationSoon, setRegistrationSoon] = useState(false);

  // launch date: April 17, 2024, 5PM
  let launchDate = new Date("April 17, 2024 17:00:00 EST").getTime();
  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const until = new Date("April 17, 2024 17:00:00 EST").getTime() - now;
      // Registration soon: January 1, 2024, 12AM
      if (new Date("January 1, 2024 00:00:00 EST").getTime() - now <= 0) {
        setRegistrationSoon(true);
      }

      // Registration open: February 15, 2024, 12AM
      if (new Date("February 20, 2024 00:00:00 EST").getTime() - now <= 0) {
        setRegistrationOpen(true);
      }

      // Registration close: March 25, 2024, 12AM
      if (new Date("March 25, 2024 23:59:59 EST").getTime() - now <= 0) {
        setRegistrationSoon(false);
        setRegistrationOpen(false);
      }

      // Hackathon start: April 17, 2024, 5PM
      if (until <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setBegun(true);
      }

      // Hackathon end: April 18, 2024, 5PM
      if (new Date("April 18, 2024 17:00:00 EST").getTime() - now <= 0) {
        clearInterval(updateTime);
        setEnded(true);
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

  const getRegistrationStatus = () => {
    if (begun) {
      // After Hackathon Start
      if (ended) {
        // After Hackathon End
        return "Thank you for attending! See you next year!";
      } else {
        // During Hackathon
        return "YRHacks has begun!";
      }
    } else {
      // Before Hackathon Start
      if (registrationOpen) {
        // After Registration Start
        return (
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf84vdRChXpE1mara1uxOYkrqBTElCejCbXvISNwqNrAW1O4g/viewform?usp=sf_link">
            Registration is now open! (Click for registration form!)
          </a>
        );
      } else {
        if (registrationSoon) {
          // Before Registration Start Soon
          return "Registration is opening soon!";
        } else {
          // After Registration End
          return "Registration is now closed!";
        }
      }
    }
  };

  return (
    <header className="relative w-screen h-screen flex flex-col justify-center items-start bg-transparent pt-20 px-5 md:px-10 lg:px-48">
      <div className="bg-transparent z-10 w-full">
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
          YRHacks
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
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col justify-start items-start"
        >
          <div className="gradient-yrhacks rounded-full px-8 py-3 flex items-center justify-center">
            <p className="text-sm lg:text-lg text-violet-100/80 font-bold text-center">
              {getRegistrationStatus()}
            </p>
          </div>
          <div className="flex flex-row items-center w-full mt-6">
            <MdLocationOn className="text-xl lg:text-2xl mr-2 text-violet-100/80" />
            <p className="text-sm lg:text-lg font-semibold text-violet-100/80">
              Dr. Bette Stephenson Centre for Learning
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
