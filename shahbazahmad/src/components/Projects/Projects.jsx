import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";

function Projects() {
  const [filter, setFilter] = useState("all");
  const makeActive = {
    backgroundColor: "#EEEDED",
    color: "black",
  };

  const filteredProjects = projects.filter(
    (p) => (filter === "all") | p.tags.includes(filter)
  );

  return (
    <div className="flex flex-col">
      <div className="md:my-3 mt-4 flex items-start gap-2 text-[0.9rem] text-white md:flex-wrap md:overflow-none overflow-x-auto h-fit">
        <div
          onClick={() => setFilter("all")}
          style={
            filter === "all" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          All
        </div>
        <div
          onClick={() => setFilter("fullstack")}
          style={
            filter === "fullstack"
              ? makeActive
              : { border: "1px solid #2C3333" }
          }
          className="px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          {"Full\xa0Stack"}
        </div>
        <div
          onClick={() => setFilter("frontend")}
          style={
            filter === "frontend" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          Frontend
        </div>
        <div
          onClick={() => setFilter("backend")}
          style={
            filter === "backend" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          Backend
        </div>
        <div
          onClick={() => setFilter("design")}
          style={
            filter === "design" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          Design
        </div>
      </div>
      <div className=" h-fit flex items-center justify-between xl:gap-0 md:gap-8 flex-wrap xl:pb-6 md:pb-14">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
