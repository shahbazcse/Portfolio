import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function NavBar() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 my-6">
      <div className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer">
        <FaSquareXTwitter className="h-5 w-5 text-gray-300 bg-transparent" />
      </div>
      <div className=" hover:bg-zinc-800 p-1.5 rounded-full cursor-pointer">
        <FaGithub className="h-5 w-5 text-gray-300 bg-transparent" />
      </div>
      <div className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer">
        <FaLinkedin className="h-5 w-5 text-gray-300 bg-transparent" />
      </div>
      <div className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer">
        <SiHashnode className="h-5 w-5 text-gray-300 bg-transparent" />
      </div>
    </div>
  );
}

export default NavBar;
