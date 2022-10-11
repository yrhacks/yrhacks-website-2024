import React from "react";
import Image from "next/image";
import { questions } from "../../data/faq";
import Collapsible from "../collapsible";

const Faq = () => {
  return (
    <main
      id="faq"
      className="w-screen flex justify-center items-center bg-transparent px-5 md:px-10 lg:px-48 py-24 relative z-10"
    >
      <div className="w-full flex flex-col justify-start items-center rounded-lg z-20">
        <h2 className="text-4xl font-bold w-full pb-6 font-helvetica text-slate-50">
          FAQ
        </h2>
        <div className="flex flex-row justify-between items-start">
          <div className="w-1/2 flex flex-col">
            {questions
              .slice(0, Math.floor(questions.length / 2))
              .map((question, index) => (
                <Collapsible
                  key={index}
                  question={question.question}
                  answer={question.answer}
                />
              ))}
          </div>
          <div className="w-1/2 flex flex-col">
            {questions
              .slice(Math.floor(questions.length / 2))
              .map((question, index) => (
                <Collapsible
                  key={index}
                  question={question.question}
                  answer={question.answer}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
