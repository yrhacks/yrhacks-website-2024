import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";

interface Props {
  header: string;
  body: any;
}

const Collapsible = ({ header, body }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full pb-5">
      <header
        className="flex flex-row justify-start items-center mt-3 w-full z-20"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <GoDash className="text-lg text-white cursor-pointer" />
        ) : (
          <GoPlus className="text-lg text-white cursor-pointer" />
        )}
        <h3 className="text-md font-bold ml-3">{header}</h3>
      </header>
      <div
        className={
          "duration-1000 transition-all flex flex-col overflow-hidden " +
          (open ? "max-h-96" : "max-h-0")
        }
      >
        {body.map((item: any, index: number) => (
          <p key={index} className="text-xs mt-3 leading-6">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Collapsible;
