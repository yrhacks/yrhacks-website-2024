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
      <div className="absolute top-64 -left-48 md:top-80 md:-left-44 lg:top-48 lg:-left-40 w-[512px] h-[512px] md:w-[800px] md:h-[800px] opacity-40 blur-2xl">
        <Image
          src="/assets/img/faq-gradient-left.svg"
          alt="gradient"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className="absolute -top-96 -right-52 w-[512px] h-[512px] md:w-[900px] md:h-[900px] opacity-40 blur-2xl">
        <Image
          src="/assets/img/faq-gradient-right.svg"
          alt="gradient"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className="w-full flex flex-col justify-start items-center rounded-lg z-20">
        <h2 className="text-4xl font-bold w-full pb-6 font-helvetica text-slate-50">
          FAQ
        </h2>
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
