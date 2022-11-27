import React from "react";
import Image from "next/image";
import { team } from "../../data/team";
import useWindowSize from "../../hooks/useWindowSize";

const Team = () => {
  // const { width } = useWindowSize();
  // let imageSize = 0;

  // if ((width < 1024 && width > 768) || width > 1300) {
  //   imageSize = 130;
  // } else if (width < 1300 && width > 1200) {
  //   imageSize = 110;
  // } else if (width < 1050) {
  //   imageSize = 90;
  // } else if (width < 1200 && width >= 1050) {
  //   imageSize = 100;
  // } else if (width < 1300 || width < 1024) {
  //   imageSize = 110;
  // }

  return (
    // <main
    //   id="team"
    //   data-aos="fade-up"
    //   className="w-screen h-full flex flex-row flex-wrap justify-evenly bg-transparent px-5 md:px-10 lg:px-48 py-16 relative z-10"
    // >
    //   {team.map((member, index) => (
    //     <div
    //       key={index}
    //       className={
    //         `flex flex-col group justify-start hover:bg-slate-50/5 duration-500 ease-in-out items-center pt-2 pb-5 w-1/2 ` +
    //         (index > 1 && "md:w-1/4")
    //       }
    //     >
    //       <div
    //         className="w-full h-44 md:h-52 flex items-center justify-center group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.35)] duration-500 ease-in-out bg-no-repeat bg-contain bg-center"
    //         style={{ backgroundImage: `url('${member.bg}')` }}
    //       >
    //         <div
    //           className={`rounded-full p-2 flex items-center justify-center ${member.colour}`}
    //         >
    //           <Image
    //             src={member.image}
    //             alt={member.name}
    //             width={imageSize}
    //             height={imageSize}
    //             className="rounded-full"
    //             objectFit={"cover"}
    //           />
    //         </div>
    //       </div>
    //       <h3 className="text-center text-lg md:text-xl font-bold font-helvetica text-slate-50/90 -mt-2">
    //         {member.name}
    //       </h3>
    //       <h4 className="text-center text-base md:text-md italic text-slate-50/90">
    //         {member.role}
    //       </h4>
    //       <div className="overflow-hidden max-h-0 group-hover:max-h-40 duration-[1500ms] delay-300 ease-in-out mt-1">
    //         <p className="text-center text-xs text-slate-50/90 px-1">
    //           Grade {member.grade} @ {member.school}
    //         </p>
    //         <p
    //           className={
    //             "text-xs md:text-sm text-slate-50/90 text-center mt-1 px-3 " +
    //             (index < 2 && " md:px-16")
    //           }
    //         >
    //           {member.blurb}
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    // </main>

    <main className="flex flex-col items-center">
      <div
        id="team"
        // data-aos="fade-up"
        className="grid grid-cols-4 gap-10 p-5 max-w-screen-xl"
      >
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-center col-span-${member.colSpan}`}
          >
            <div className={`rounded-full p-3 w-52 h-52 ${member.colour}`}>
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
        )
        )}
      </div>
    </main >
  );
};

export default Team;
