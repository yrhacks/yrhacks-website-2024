import React from "react";
import Image from "next/image";
import { team } from "../../data/team";

const Team = () => {
  const getColSpan = (index: number) => {
    if (index <= 1) return "lg:col-span-2";
    else if (index == 14) return "lg:col-span-4";
    else return "lg:col-span-1";
  };

  return (
    <main className="flex flex-col items-center">
      <div
        id="team"
        data-aos="fade-up"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 m-2 lg:m-10 max-w-screen-lg"
      >
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-center col-span-1 ${getColSpan(
              index
            )}`}
          >
            <div className="max-w-[300px] flex flex-col justify-start items-center">
              <div className={`relative w-40 lg:w-64 h-40 lg:h-64`}>
                {/* background image */}
                <div className="absolute w-full h-full">
                  <Image
                    src={member.bg}
                    alt={member.name}
                    layout="fill"
                    object-fit="contain"
                  />
                </div>

                {/* coloured border */}
                <div
                  className={`absolute rounded-full w-28 lg:w-44 h-28 lg:h-44 inset-1/2 -translate-x-1/2 -translate-y-1/2 ${member.colour}`}
                />

                {/* human image */}
                <div className="absolute w-24 lg:w-36 h-24 lg:h-36 inset-1/2 -translate-x-1/2 -translate-y-1/2">
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

              <h3 className="text-center text-md lg:text-xl font-bold font-helvetica text-violet-100/80">
                {member.name}
              </h3>
              <h4 className="text-center text-sm lg:text-md italic text-violet-100/80">
                {member.role}
              </h4>
              <p className="text-center text-xs text-violet-100/80 mb-3">
                Grade {member.grade} @ {member.school}
              </p>

              <p
                className={"text-xs lg:text-sm text-violet-100/80 text-center"}
              >
                {member.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Team;
