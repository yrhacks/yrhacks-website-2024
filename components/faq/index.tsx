import React from "react";
import { questions } from "../../data/faq";
import Collapsible from "../collapsible";

const Faq = () => {
  return (
    <div
      id="faq"
      className="w-screen h-screen flex flex-col justify-start items-center bg-slate-950 px-5 py-20"
    >
      <h2 className="text-4xl font-bold w-full pb-10">FAQ</h2>
      <div className="w-full">
        {questions.map((question, index) => (
          <Collapsible
            key={index}
            header={question.header}
            body={question.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
