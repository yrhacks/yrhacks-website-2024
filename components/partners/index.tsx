import React from "react";

import { partners } from "../../data/partners";

const Partners = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen flex flex-col justify-start items-center bg-slate-700 px-5 py-20"
    >
      <h2 className="text-4xl font-bold w-full pb-10">Partners</h2>
      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {partners.map((partner, index) => (
          <a
            key={index}
            className="flex flex-col justify-center items-center mr-5 mb-5 border-2 border-white py-4 px-6"
            href={partner.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="text-sm text-white">{partner.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
