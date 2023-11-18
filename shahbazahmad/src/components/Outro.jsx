import React from "react";
import profilepicture from "../assets/shahbaz.jpg";
import { PiArrowUpRightBold } from "react-icons/pi";

function Outro() {
  return (
    <div className="flex flex-col gap-6 my-8 items-center justify-center tracking-wider">
      <img
        src={profilepicture}
        alt="Profile"
        className="h-12 w-12 rounded-full"
      />
      <p className="lg:w-[45%] text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        placeat cum sapiente officia impedit aliquid earum nihil quos vitae
        ipsam.
      </p>
      <div>
        <a
          href="mailto:cseshahbaz@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 p-1.5 pt-0.5 rounded-md cursor-pointer mr-auto"
        >
          <span className="text-blue-600 underline underline-offset-4 cursor-pointer bg-transparent">
            cseshahbaz@gmail.com
          </span>
          <PiArrowUpRightBold className="h-5 w-5 mt-1.5 text-white bg-transparent" />
        </a>
      </div>
    </div>
  );
}

export default Outro;
