import React from "react";
import type { NextPage } from "next";
import { questions } from "../data/faq";
import Collapsible from "../components/collapsible";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ParticlesBackground from "../components/particles";

const Faq: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent overflow-y-hidden">
      <ParticlesBackground
        props={{
          background: {
            image: "url('/assets/img/bg-teal.svg')",
          },
        }}
      />
      <Nav />
      <div
        id="faq"
        className="w-screen flex justify-center items-center bg-transparent px-5 md:px-10 lg:px-48 pt-48 relative z-10"
      >
        <div className="w-full flex flex-col justify-start items-center rounded-lg z-20">
          <h2 className="text-4xl font-bold w-full pb-10 font-helvetica text-violet-100/80">
            <span className="!bg-clip-text text-transparent gradient-teal">
              F
            </span>
            requently{" "}
            <span className="!bg-clip-text text-transparent gradient-teal">
              A
            </span>
            sked{" "}
            <span className="!bg-clip-text text-transparent gradient-teal">
              Q
            </span>
            uestions
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
