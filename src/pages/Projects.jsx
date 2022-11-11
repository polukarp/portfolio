import { Heading } from "@chakra-ui/react";
import React from "react";
import Project from "../components/Project";
import { ListItem, OrderedList } from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";

const Projects = ({ projects }) => {
  return (
    <div className="px-4">
      <Heading className="text-center sm:text-left" size={"xl"}>
        Проекты
      </Heading>

      <OrderedList className="p-4 text-xl" spacing={3}>
        {projects.map((project) => (
          <ListItem>
            <Project project={project}></Project>
          </ListItem>
        ))}
      </OrderedList>
    </div>
  );
};

export default Projects;
