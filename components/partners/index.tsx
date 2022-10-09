import React from "react";

import { partners } from "../../data/partners";

const Partners = () => {
  return (
    <main
      id="partners"
      className="w-screen flex flex-col justify-start items-center bg-slate-700 px-5 md:px-10 lg:px-48 py-20"
    >
      <h2 className="text-4xl font-bold w-full pb-10">Our Partners</h2>
      <div className="w-full flex flex-row flex-wrap justify-center items-center mt-4">
        <h4 className="w-full font-bold text-2xl mb-5">Board Partners</h4>
        {partners.board_partners.map((partner, index) => (
          <a
            key={index}
            className="flex flex-col justify-center items-center mb-5 border-2 border-white py-4 px-6"
            href={partner.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="text-sm text-white">{partner.name}</p>
          </a>
        ))}
      </div>
      <div className="w-full flex flex-wrap justify-center mt-4">
        <h4 className="w-full font-bold text-2xl mb-5">Previous Partners</h4>
        {partners.normal_partners.map((partner, index) => (
          <div
            className={"w-1/2 mb-3 " + (index % 2 ? "pl-1" : "pr-1")}
            key={index}
          >
            <a
              key={index}
              className="w-full flex flex-col justify-center items-center border-2 border-white py-4 px-6 text-sm text-white text-center"
              href={partner.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {partner.name}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Partners;
