import React, { useState } from "react";
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";
import { GoDotFill } from "react-icons/go";

function ItemsContainer() {
  const [menu, setMenu] = useState("Projects");
  const makeActive = {
    color: "white",
  };
  return (
    <div className="flex flex-col">
      <div className="flex gap-6 text-[0.85rem] font-bold">
        <button
          onClick={() => setMenu("Projects")}
          style={menu === "Projects" ? makeActive : {}}
          className="tracking-wide hover:text-stone-300"
        >
          Products
        </button>
        <div className="flex items-center" style={{gap: "-0.6px"}}>
          <button
            onClick={() => setMenu("Blogs")}
            style={menu === "Blogs" ? makeActive : {}}
            className="tracking-wide hover:text-stone-300"
          >
            Blogs
          </button>
          <GoDotFill className="h-3 w-3 mb-3 ml-0.5 text-red-600" />
        </div>
      </div>
      <div className="h-fit my-3 border-y-[1px] border-[#4e4e4e70]">
        {menu === "Projects" && <Projects />}
        {menu === "Blogs" && <Blogs />}
      </div>
    </div>
  );
}

export default ItemsContainer;
