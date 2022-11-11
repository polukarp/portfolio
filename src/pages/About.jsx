import React from "react";
import { UnorderedList, ListItem, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <div className="flex flex-col py-8 px-4">
      <Heading className="text-center sm:text-left" size={"xl"}>
        Факты
      </Heading>
      <UnorderedList className="p-4 text-xl" spacing={3}>
        <ListItem>
          С 2022 года обучаюсь в <span className="font-bold">КФУ</span> на
          факультете Программной Инженерии по профилю "Разработка современного
          Программного Обеспечения"
        </ListItem>
        <ListItem>
          Свободно владею английским (C1) и немецким (B1) языками
        </ListItem>
      </UnorderedList>
    </div>
  );
};

export default About;
