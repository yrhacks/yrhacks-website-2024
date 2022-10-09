import React from "react";

interface numProp {
  num: string | number;
  unit: string;
}

export const NumberBox = ({ num, unit }: numProp) => {
  return (
    <div className="w-1/5 flex flex-col items-center justify-center px-2 my-3">
      <div className="text-2xl gradient-purple font-bold md:text-6xl">
        {num}
      </div>
      <p className="text-sm placeholder:font-semibold text-stone-200  md:text-2xl ">
        {unit}
      </p>
    </div>
  );
};
