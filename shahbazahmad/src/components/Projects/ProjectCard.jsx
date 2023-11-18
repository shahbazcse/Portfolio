import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOutBold } from "react-icons/pi";

function ProjectCard() {
  return (
    <div className="flex flex-col gap-3 bg-transparent md:h-[42vh] xl:w-[34vh] md:w-[38vh] w-full my-8 text-[0.9rem]">
      <img
        src="https://placehold.co/600x400"
        alt=""
        className="object-cover rounded-xl mb-2"
      />
      <p className="text-white text-[1.1rem] font-bold tracking-wide">Title</p>
      <p>
        Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Iste unde deleniti sequi blanditiis quos? Dignissimos, veritatis error?
        Dolorem, a quaerat.
      </p>
      <div className="flex items-center gap-4 font-raleway text-[0.8rem] mt-3 md:mt-1">
        <div className="flex items-center justify-center gap-1.5 px-4 py-1 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-white font-bold cursor-pointer">
          <span className="bg-transparent">Source</span>
          <AiFillGithub className="bg-transparent h-4 w-4" />
        </div>
        <div className="flex items-center justify-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-white font-bold cursor-pointer">
          <span className="bg-transparent">Live</span>
          <PiArrowSquareOutBold className="bg-transparent h-4 w-4 mb-0.5" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
