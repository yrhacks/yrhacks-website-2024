import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";

interface Props {
  question: string;
  answer: any;
}

const Collapsible = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full pb-5">
      <header
        className="flex flex-row justify-start items-center mt-3 w-full z-20 cursor-pointer duration-500 ease-in-out transition-all hover:text-emerald-500"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <GoDash className="text-lg " />
        ) : (
          <GoPlus className="text-lg " />
        )}
        <h3 className="text-md font-bold ml-3">{question}</h3>
      </header>
      <div
        className={
          "duration-700 transition-all flex flex-col overflow-hidden " +
          (open ? "max-h-96" : "max-h-0")
        }
      >
        {answer.map((item: any, index: number) => (
          <p key={index} className="text-xs leading-[1.6em] mt-3">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Collapsible;
