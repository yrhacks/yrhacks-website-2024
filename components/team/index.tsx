import React from "react";
import Image from "next/image";
import { team } from "../../data/team";

const Team = () => {
  return (
    <main
      id="team"
      data-aos="fade-up"
      className="w-screen h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-transparent px-5 md:px-10 lg:px-48 py-24 relative z-10"
    >
      {team.map((member, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
            className="rounded-full"
          />
          <h3 className="text-2xl font-bold font-helvetica text-slate-50">
            {member.name}
          </h3>
          <p className="text-slate-50">{member.role}</p>
        </div>
      ))}
    </main>
  );
};

export default Team;
