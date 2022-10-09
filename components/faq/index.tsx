import React from "react";
import { questions } from "../../data/faq";
import Collapsible from "../collapsible";

const Faq = () => {
  return (
    <main
      id="faq"
      className="w-screen flex flex-col justify-start items-center bg-slate-950 px-5 md:px-10 lg:px-48 py-24"
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
    </main>
  );
};

export default Faq;
