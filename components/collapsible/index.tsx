import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import AnimateHeight from "react-animate-height";
interface Props {
  question: string;
  answer: any;
}

const Collapsible = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full pb-5">
      <header
        className="flex flex-row justify-start items-center text-slate-50 mt-3 w-full z-20 cursor-pointer duration-500 ease-in-out transition-all lg:hover:text-emerald-500"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <GoDash className="text-lg cursor-pointer " />
        ) : (
          <GoPlus className="text-lg cursor-pointer " />
        )}
        <h3 className="text-base md:text-lg font-bold ml-3 cursor-pointer">
          {question}
        </h3>
      </header>
      <AnimateHeight duration={200} height={open ? "auto" : 0}>
        {answer.map((item: any, index: number) => (
          <p
            key={index}
            className="text-base leading-[1.6em] mt-3 text-slate-50/70 pr-8"
          >
            {item}
          </p>
        ))}
      </AnimateHeight>
    </div>
  );
};

export default Collapsible;
