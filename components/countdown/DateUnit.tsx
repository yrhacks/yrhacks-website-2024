import React from "react";

interface Props {
  value: number;
  unit: string;
}

const DateUnit = ({ value, unit }: Props) => {
  return (
    <div className="w-1/5 flex flex-col items-center justify-center px-2 my-3">
      <div className="text-2xl gradient-purple text-transparent !bg-clip-text font-bold md:text-6xl">
        {String(value).padStart(2, "0")}
      </div>
      <p className="text-sm placeholder:font-semibold text-stone-200  md:text-2xl ">
        {unit}
      </p>
    </div>
  );
};

export default DateUnit;
