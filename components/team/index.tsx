import React from "react";
import Image from "next/image";
import { team } from "../../data/team";

const Team = () => {
  return (
    <main
      id="team"
      data-aos="fade-up"
      className="w-screen h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 bg-transparent px-5 md:px-10 lg:px-48 py-24 relative z-10"
    >
      {team.map((member, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center px-2"
        >
          <div
            className={
              "rounded-full p-2 flex items-center justify-center " +
              member.colour
            }
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full"
              objectFit={"cover"}
            />
          </div>
          <h3 className="text-xl font-bold font-helvetica text-slate-50/90 mt-3">
            {member.name}
          </h3>
          <p className="text-lg italic text-slate-50/90  my-1">{member.role}</p>
          <p className="text-xs text-slate-50/90">
            Grade {member.grade} @ {member.school}
          </p>
          <p className="text-sm text-slate-50/90 text-center mt-2">
            {member.blurb}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Team;
