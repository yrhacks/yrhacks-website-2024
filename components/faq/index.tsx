import React from "react";
import Image from "next/image";
import { questions } from "../../data/faq";
import Collapsible from "../collapsible";

const Faq = () => {
  return (
    <main
      id="faq"
      className="w-screen flex justify-center items-center bg-transparent px-5 md:px-10 lg:px-48 pb-24 relative z-10"
    >
      <div className="w-full flex flex-col justify-start items-center rounded-lg z-20">
        <h2 className="text-4xl font-bold w-full pb-6 font-helvetica text-slate-50">
          FAQ
        </h2>
        <div className="w-full lg:grid lg:grid-cols-2">
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
