import React from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function NavBar() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 my-6">
      <a
        href="mailto:cseshahbaz@gmail.com"
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer"
      >
        <MdEmail className="h-5 w-5 text-gray-300 bg-transparent" />
      </a>
      <a
        href="https://twitter.com/shahbaz_cse"
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer"
      >
        <FaSquareXTwitter className="h-5 w-5 text-gray-300 bg-transparent" />
      </a>
      <a
        href="https://github.com/shahbazcse"
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-zinc-800 p-1.5 rounded-full cursor-pointer"
      >
        <FaGithub className="h-5 w-5 text-gray-300 bg-transparent" />
      </a>
      <a
        href="https://www.linkedin.com/in/shahbazcse"
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer"
      >
        <FaLinkedin className="h-5 w-5 text-gray-300 bg-transparent" />
      </a>
      <a
        href="https://shahbazahmad.hashnode.dev"
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-zinc-800 p-1.5 rounded-md cursor-pointer"
      >
        <SiHashnode className="h-5 w-5 text-gray-300 bg-transparent" />
      </a>
    </div>
  );
}

export default NavBar;
