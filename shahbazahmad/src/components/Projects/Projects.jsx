import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";

function Projects() {
  return (
    <div className="h-fit flex items-center justify-between xl:gap-0 md:gap-8 flex-wrap xl:pb-6 md:pb-14">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
