import { Heading } from "@chakra-ui/react";

import React from "react";

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-8  md:grid-cols-2 items-center">
        <div>
          <Heading size={"md"}>{project.title}</Heading>
          <p>{project.description}</p>
        </div>
        {project.image && (
          <a target="_blank" href={project.link}>
            <img className="cursor-pointer" src={project.image}></img>
          </a>
        )}

        <a target="_blank" href={project.link}></a>
      </div>
    </div>
  );
};

export default Project;
