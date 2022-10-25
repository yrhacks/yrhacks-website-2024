import React from "react";
import type { NextPage } from "next";
import { questions } from "../data/faq";
import Collapsible from "../components/collapsible";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ParticlesBackground from "../components/particles";

const Faq: NextPage = () => {
  return (
    <main className="w-screen h-full bg-slate-950 overflow-y-hidden">
      <ParticlesBackground />
      <Nav />
      <div
        id="faq"
        data-aos="fade-up"
        className="w-screen flex justify-center items-center bg-transparent px-5 md:px-10 lg:px-48 py-48 relative z-10"
      >
        <div className="w-full flex flex-col justify-start items-center rounded-lg z-20">
          <h2 className="text-4xl font-bold w-full pb-6 font-helvetica text-slate-50">
            FAQ
          </h2>
          <div className="flex flex-row justify-between items-start flex-wrap">
            <div className="w-full lg:w-[48%] flex flex-col">
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
            <div className="w-full lg:w-[48%] flex flex-col">
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
      </div>
      <Footer />
    </main>
  );
};

export default Faq;
