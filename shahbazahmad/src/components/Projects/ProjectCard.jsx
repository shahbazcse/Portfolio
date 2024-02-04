import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOutBold } from "react-icons/pi";

function ProjectCard({ project }) {
  const { title, description, img, date, tech, source, live } = project;
  return (
    <div className="flex flex-col gap-3 md:h-[33rem] w-full sm:w-[24rem] mt-6 text-[0.9rem]">
      <img
        src={img || "https://placehold.co/600x400"}
        alt="Project"
        className="object-cover rounded-xl"
      />
      <p className="text-white text-[1.1rem] mt-1 sm:mt-0 font-bold tracking-wide">
        {title}
      </p>
      <p className="h-fit overflow-auto">{description}</p>
      <div className="flex items-start gap-1 text-[0.8rem] font-poppins sm:flex-wrap md:overflow-none overflow-x-auto no-scrollbar">
        {tech.map((i, index) => (
          <div
            key={index}
            className="px-3 my-0.5 bg-gray-800 text-white rounded-full"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-4 font-raleway text-[0.8rem] sm:mt-2">
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1 bg-zinc-900 hover:bg-zinc-800 duration-700 rounded-lg text-white font-bold cursor-pointer"
          >
            <span className="bg-transparent">Source</span>
            <AiFillGithub className="bg-transparent h-4 w-4" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 duration-700 rounded-lg text-white font-bold cursor-pointer"
          >
            <span className="bg-transparent">Live</span>
            <PiArrowSquareOutBold className="bg-transparent h-4 w-4 mb-0.5" />
          </a>
        </div>
        <div className="text-[0.8rem] ml-1 mr-2 text-white mt-auto tracking-wide font-roboto">
          {date?.month}, {date?.year}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
