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
    <div className="w-full flex flex-row items-center justify-between p-4 ">
      <DateUnit value={days} unit="Days" />
      <div className="w-[2px] h-full bg-slate-600/20" />
      <DateUnit value={hours} unit="Hours" />
      <div className="w-[2px] h-full bg-slate-600/20" />
      <DateUnit value={minutes} unit="Minutes" />
      <div className="w-[2px] h-full bg-slate-600/20" />
      <DateUnit value={seconds} unit="Seconds" />
    </div>
  );
};

export default Countdown;
