import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="text-center md:text-start">
      <h2 className="md:text-5xl text-4xl m-auto">
        {" "}
        My Recent <br /> <span className="text-main"> Projects</span>{" "}
      </h2>
      <ProjectCard />
    </section>
  );
};

export default Project;
