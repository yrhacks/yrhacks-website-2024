import React from "react";
import DateUnit from "./DateUnit";

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ days, hours, minutes, seconds }: Props) => {
  return (
    <div className="w-full flex flex-row items-center justify-between select-none">
      <DateUnit value={days} unit="Days" delay={0} />
      <div className="w-[2px] h-full bg-slate-600/20" />
      <DateUnit value={hours} unit="Hours" delay={150} />
      <div className="w-[2px] h-full bg-slate-600/20" />
      <DateUnit value={minutes} unit="Minutes" delay={300} />
      <div className="w-[2px] h-full bg-slate-600/20" />
      <DateUnit value={seconds} unit="Seconds" delay={450} />
    </div>
  );
};

export default Countdown;
