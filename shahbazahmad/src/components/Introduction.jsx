import React from "react";
import logo from "../assets/logo.png";
import { PiArrowUpRightBold } from "react-icons/pi";

function Introduction() {
  const resumeLink = "";
  return (
    <div className="flex flex-col lg:w-[45%] gap-5 mt-4 mb-8 text-md">
      <div>
        <img src={logo} alt="logo" className="h-10 w-10" />
      </div>
      <div>
        I'm <span className="text-white">Shahbaz</span>, a developer, designer,
        and problem solver.
      </div>
      <div>
        As a full-stack developer I've built and shipped 12+ products (with over
        160K users), been 2 times a Product Hunt Maker of The Year finalist, and
        much more ✌
      </div>
      <a
        href={resumeLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 hover:underline underline-offset-4 rounded-md cursor-pointer mr-auto"
      >
        <span className="text-blue-500 cursor-pointer bg-transparent text-[0.9rem]">
          View Resume
        </span>
        <PiArrowUpRightBold className="h-5 w-5 text-white bg-transparent" />
      </a>
    </div>
  );
}

export default Introduction;
