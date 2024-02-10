import React from "react";
import logo from "../assets/logo.png";
import { PiArrowUpRightBold } from "react-icons/pi";
import { resume as resumeLink } from "../data/resume";

function Introduction() {
  return (
    <div className="flex flex-col md:w-[36rem] gap-5 mt-4 mb-8 text-md">
      <div>
        <img src={logo} alt="logo" className="h-10 w-10" />
      </div>
      <div>
        I'm <span className="text-white">Shahbaz</span>, a developer, designer,
        and problem solver.
      </div>
      <div>
        Specializing in crafting dynamic, <span className="text-gray-200">engaging interfaces</span> with
        clean and optimized code, I excel in creating seamless and intuitive{" "}
        <span className="text-gray-200">user experiences</span> using{" "}
        <span className="text-gray-200">cutting-edge technologies</span> for high-quality web
        applications. ✨
      </div>
      <a
        href={resumeLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 duration-700 text-white px-3 py-1.5 rounded-md cursor-pointer mr-auto"
      >
        <span className="cursor-pointer bg-transparent text-[0.9rem]">
          View Resume
        </span>
        <PiArrowUpRightBold className="h-5 w-5 mt-1 bg-transparent" />
      </a>
    </div>
  );
}

export default Introduction;
