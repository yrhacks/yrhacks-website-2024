import React from "react";

import { partners } from "../../data/partners";

const Partners = () => {
  return (
    <main
      id="partners"
      className="w-screen relative flex flex-col justify-start items-center bg-slate-950 px-5 md:px-10 lg:px-48 py-20"
    >
      <div className="absolute top-80 right-0 lg:right-72 w-52 h-52 rounded-tr-md rounded-bl-md rounded-tl-full rounded-br-full bg-gradient-to-br from-red-700/80 to-orange-300/80 blur-[150px]" />
      <div className="absolute bottom-16 left-0 w-48 h-48 lg:w-80 lg:h-80 rounded-tr-full rounded-bl-full rounded-tl-md rounded-br-md bg-gradient-to-tl from-red-700/80 to-pink-400/80 blur-[150px]" />
      <h2 className="text-4xl font-bold w-full pb-10 font-helvetica">
        Our Partners
      </h2>
      <div className="w-full flex flex-row flex-wrap justify-center items-center mt-5 mb-10">
        <h4 className="w-full font-bold text-2xl mb-5">
          <span className="gradient-pumpkin text-transparent !bg-clip-text font-helvetica">
            Board
          </span>{" "}
          Partners
        </h4>
        <div className="w-full grid grid-cols-2 gap-2 lg:gap-3">
          {partners.board_partners.map((partner, index) => (
            <div className="h-full" key={index}>
              <a
                className="h-full flex flex-col justify-center items-center border-2 border-slate-50 duration-700 transition-all ease-in-out hover:bg-slate-50"
                href={partner.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-slate-50 text-center flex justify-center items-center py-4 px-6 text-sm w-full h-full duration-500 ease-in-out transition-all font-normal hover:font-bold hover:tracking-wide hover:text-transparent gradient-pumpkin !bg-clip-text cursor-pointer">
                  {partner.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-4">
        <h4 className="w-full font-bold text-2xl mb-5 font-helvetica">
          <span className="gradient-rose text-transparent !bg-clip-text">
            Previous
          </span>{" "}
          Partners
        </h4>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {partners.normal_partners.map((partner, index) => (
            <div className="h-full" key={index}>
              <a
                key={index}
                className="flex flex-col h-full justify-center items-center border-2 border-slate-50 duration-700 transition-all ease-in-out hover:bg-slate-50"
                href={partner.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-slate-50 text-center py-4 px-6 flex justify-center items-center text-sm w-full h-full duration-500 ease-in-out transition-all font-normal hover:font-bold hover:tracking-wide hover:text-transparent gradient-rose !bg-clip-text cursor-pointer">
                  {partner.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Partners;
