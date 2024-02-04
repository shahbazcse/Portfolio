import React from "react";
import staytuned from "../../assets/staytuned.gif";

function Blogs() {
  return (
    <div className="min-h-[29rem] h-fit flex items-center justify-between xl:gap-0 md:gap-8 flex-wrap xl:pb-6 md:pb-14">
      <img className="mx-auto h-[12rem] w-[20rem]" src={staytuned} />
    </div>
  );
}

export default Blogs;
