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

  const projectsCount = (tag) =>
    tag === "all" ? projects : projects.filter((p) => p.tags.includes(tag));

  return (
    <div className="flex flex-col">
      <div className="md:my-4 mt-4 flex items-start gap-2 text-[0.8rem] text-white font-manrope font-bold tracking-wide md:flex-wrap md:overflow-none overflow-x-auto h-fit">
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
          onClick={() => setFilter("ai")}
          style={
            filter === "ai"
              ? makeActive
              : { border: "1px solid #2C3333" }
          }
          className="flex gap-1 px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          {"AI"} <span className="hidden bg-transparent md:block">({projectsCount("ai").length})</span>
        </div>
        <div
          onClick={() => setFilter("fullstack")}
          style={
            filter === "fullstack"
              ? makeActive
              : { border: "1px solid #2C3333" }
          }
          className="flex gap-1 px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          {"Full\xa0Stack"} <span className="hidden bg-transparent md:block">({projectsCount("fullstack").length})</span>
        </div>
        <div
          onClick={() => setFilter("frontend")}
          style={
            filter === "frontend" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="flex gap-1 px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          Frontend <span className="hidden bg-transparent md:block">({projectsCount("frontend").length})</span>
        </div>
        <div
          onClick={() => setFilter("backend")}
          style={
            filter === "backend" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="flex gap-1 px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          Backend <span className="hidden bg-transparent md:block">({projectsCount("backend").length})</span>
        </div>
        <div
          onClick={() => setFilter("design")}
          style={
            filter === "design" ? makeActive : { border: "1px solid #2C3333" }
          }
          className="flex gap-1 px-3 my-0.5 rounded-md cursor-pointer bg-zinc-900 hover:bg-zinc-800"
        >
          Design <span className="hidden bg-transparent md:block">({projectsCount("design").length})</span>
        </div>
      </div>
      <div className="h-fit flex items-center justify-start xl:gap-[2.4rem] md:gap-8 flex-wrap xl:pb-6 md:pb-14">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
