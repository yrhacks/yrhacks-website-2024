import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
interface Props {
  question: string;
  answer: any;
}

const Collapsible = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={"w-full mb-3 mr-8 rounded-md " + (open && "flash")}>
      <header
        className={
          "flex flex-row justify-start items-center p-3 rounded-md w-full z-20 cursor-pointer duration-500 transition-all hover:bg-slate-50/5 " +
          "active:bg-slate-50/[0.15]"
        }
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
      <div
        className={
          "flex flex-col overflow-hidden rounded-lg px-4 pb-3 " +
          (open ? "max-h-96" : "max-h-0")
        }
      >
        {answer.map((item: any, index: number) => (
          <p
            key={index}
            className="text-base leading-[1.6em] mt-3 text-slate-50/70"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Collapsible;
