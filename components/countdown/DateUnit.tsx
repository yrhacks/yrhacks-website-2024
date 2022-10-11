import React from "react";

interface Props {
  value: number;
  unit: string;
}

const DateUnit = ({ value, unit }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-2 py-3">
      <h2 className="text-2xl gradient-purple text-transparent !bg-clip-text font-helvetica font-bold sm:text-4xl md:text-6xl">
        {String(value).padStart(2, "0")}
      </h2>
      <p className="text-sm placeholder:font-semibold text-stone-200 md:text-2xl">
        {unit}
      </p>
    </div>
  );
};

export default DateUnit;
