import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const temp = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-fit flex items-center justify-between xl:gap-0 md:gap-8 flex-wrap xl:pb-6 md:pb-14">
      {temp.map((i) => (
        <ProjectCard />
      ))}
    </div>
  );
}

export default Projects;
