import React from "react";
import Image from "next/image";
import { team } from "../../data/team";
import useWindowSize from "../../hooks/useWindowSize";

const Team = () => {
  const getColSpan = (index: number) => {
    if (index <= 1) return "lg:col-span-2";
    else if (index == 14) return "lg:col-span-4";
    else return "lg:col-span-1";
  }

  return (
    <main className="flex flex-col items-center">
      <div
        id="team"
        data-aos="fade-up"
        className="grid grid-cols-2 lg:grid-cols-4 gap-10 m-8 max-w-screen-2xl"
      >
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-center col-span-1 ${getColSpan(index)}`}
          >
            <div className="flex flex-col justify-start items-center max-w-xs">
              <div className={`relative rounded-full w-32 lg:w-52 h-32 lg:h-52 ${member.colour}`}>
                <div className="absolute w-48 lg:w-72 h-48 lg:h-72 inset-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={member.bg}
                    alt={member.name}
                    layout="fill"
                    object-fit="contain"
                  />
                </div>

                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    style={{
                      borderRadius: "50%",
                    }}
                    layout="fill"
                    object-fit="contain"
                  />
                </div>
              </div>

              <div className="p-1">
                <h3 className="text-center text-lg md:text-xl font-bold font-helvetica text-slate-50/90 mt-3">
                  {member.name}
                </h3>
                <h4 className="text-center text-base md:text-md italic text-slate-50/90">
                  {member.role}
                </h4>
                <p className="text-center text-xs text-slate-50/90 mb-3">
                  Grade {member.grade} @ {member.school}
                </p>

                <p
                  className={
                    "text-xs md:text-sm text-slate-50/90 text-center"
                  }
                >
                  {member.blurb}
                </p>
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </main >
  );
};

export default Team;
