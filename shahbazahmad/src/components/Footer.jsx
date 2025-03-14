import React from "react";
import { BsTerminalFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-between items-center py-4 my-3 border-t-[1px] border-[#4e4e4e70] text-[0.8rem]">
      <div>Shahbaz © 2025</div>
      <BsTerminalFill className="h-5 w-5 text-white bg-transparent" />
    </div>
  );
}

export default Footer;
