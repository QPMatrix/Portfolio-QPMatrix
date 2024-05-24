import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { Projects } from "@prisma/client";
import { getProjects } from "@/actions/project";
import { cn } from "@/utils/cn";

const RecentProjects = async ({ type }: { type: string }) => {
  const projects = await getProjects();
  if (!projects) return null;
  return (
    <div
      className={cn(type === "section" ? "py-20" : "py-20 mt-20")}
      id="projects"
    >
      {type === "section" ? (
        <h1 className="heading">
          small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      ) : (
        <h1 className="heading text-purple">Projects List</h1>
      )}

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          (
            { id, title, description, thumbnail, iconLists, link, github },
            idx
          ) => (
            <>
              {idx <= 3 && (
                <div
                  key={id}
                  className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] sm:w-[570px] flex items-center justify-center  w-[80vw]"
                >
                  <PinContainer title={`/project/${id}`}>
                    <a
                      href={`/projects/${id}`}
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh]  mb-10">
                        <div className=" relative w-full h-full overflow-hidden lg:rounded-xl bg-[#13162d]">
                          <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img
                          src={thumbnail!}
                          alt={title!}
                          className="z-10 absolute bottom-0  object-contain w-[100%] h-[100%]"
                        />
                      </div>
                      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                      </h1>
                      <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                        {description}
                      </p>
                      <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                          {iconLists.map((icon, index) => (
                            <div
                              key={icon}
                              className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                              style={{
                                transform: `translateX(-${5 * index * 2})px`,
                              }}
                            >
                              <img src={icon} alt={icon} className="p-2" />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center items-center">
                          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            Learn More
                          </p>

                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                      </div>
                    </a>
                  </PinContainer>
                </div>
              )}

              {type === "section" && idx >= 4 && (
                <div className="flex mt-10">
                  <MagicButton
                    title="Show More"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
