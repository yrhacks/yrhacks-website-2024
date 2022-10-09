import React from "react";
import { questions } from "../../data/faq";
import Collapsible from "../collapsible";

const Faq = () => {
  return (
    <main
    id="faq"
      className="w-screen flex justify-center items-center bg-slate-50 p-2 xs:p-10 pb-24 relative z-10"
    >
      <div className="absolute w-full h-full p-2 py-6 xs:p-10" >
        <div className="gradient-teal w-full h-full opacity-60 blur-2xl" />
      </div>

      <div
        className="w-full flex flex-col justify-start items-center bg-slate-950 rounded-lg px-4 sm:px-12 py-12 z-10"
      >
        <h2 className="text-4xl font-bold w-full pb-6">FAQ</h2>
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
