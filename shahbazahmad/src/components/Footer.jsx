import React from "react";
import { BsTerminalFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-between items-center py-[2vh] my-3 border-t-[1px] border-[#4e4e4e70] text-[0.8rem]">
      <div>Shahbaz © 2023</div>
      <BsTerminalFill className="h-5 w-5 mt-1 text-white bg-transparent" />
    </div>
  );
}

export default Footer;
