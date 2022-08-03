import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="project" className="text-center md:text-start pt-24 md:px-24">
      <h2 className="md:text-5xl text-4xl m-auto">
        {" "}
        My Recent <br /> <span className="text-main"> Projects</span>{" "}
      </h2>
      <ProjectCard />
    </div>
  );
};

export default Project;
