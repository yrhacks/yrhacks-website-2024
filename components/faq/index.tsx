import React from "react";
import { questions } from "../../data/faq";
import Collapsible from "../collapsible";

const Faq = () => {
  return (
    <main
      id="faq"
      className="w-screen flex justify-center items-center bg-slate-950 md:px-10 lg:px-48 pb-24 relative z-10"
    >
      <div className="absolute bottom-24 lg:bottom-16 left-32 w-48 h-48 lg:w-80 lg:h-80 rounded-tr-full rounded-bl-full rounded-tl-md rounded-br-md bg-gradient-to-br from-emerald-400/80 to-indigo-900/80 blur-[130px]" />
      <div className="absolute top-8 lg:top-18 right-0 w-48 h-48 lg:w-72 lg:h-72 rounded-tr-full rounded-bl-full rounded-tl-md rounded-br-md bg-gradient-to-br from-cyan-500/80 to-violet-800/80 blur-[130px]" />
      <div className="w-full flex flex-col justify-start items-center rounded-lg px-4 sm:px-12 py-12 z-10 ">
        <h2 className="text-4xl font-bold w-full pb-6 font-helvetica">FAQ</h2>
        <div className="w-full">
          {questions.map((question, index) => (
            <Collapsible
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faq;
