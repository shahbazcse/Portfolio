import React, { useState } from "react";
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";

function ItemsContainer() {
  const [menu, setMenu] = useState("Projects");
  const makeActive = {
    color: "white",
  };
  return (
    <div className="flex flex-col">
      <div className="flex gap-6 text-[0.9rem] font-bold">
        <button
          onClick={() => setMenu("Projects")}
          style={menu === "Projects" ? makeActive : {}}
          className="tracking-[2px] hover:text-stone-300"
        >
          Projects
        </button>
        <button
          onClick={() => setMenu("Blogs")}
          style={menu === "Blogs" ? makeActive : {}}
          className="tracking-wider hover:text-stone-300"
        >
          Blogs
        </button>
      </div>
      <div className="flex flex-wrap min-h-[48vh] h-fit my-3 border-y-[1px] border-[#4e4e4e70]">
        {menu === "Projects" && <Projects />}
        {menu === "Blogs" && <Blogs />}
      </div>
    </div>
  );
}

export default ItemsContainer;
