import { Heading } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faJs,
  faNode,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="px-4 pb-4">
      <Heading className="mb-4 text-center sm:text-left">Навыки</Heading>
      <div className="flex justify-center gap-8 flex-wrap">
        <FontAwesomeIcon
          icon={faReact}
          size="8x"
          className="skills-logo hover:darken text-sky-500 "
        />
        <FontAwesomeIcon
          icon={faJs}
          size="8x"
          className="skills-logo hover:darken text-yellow-300 "
        />
        <FontAwesomeIcon
          icon={faNode}
          size="8x"
          className="skills-logo hover:darken text-green-700 "
        />
        <FontAwesomeIcon
          icon={faSass}
          size="8x"
          className="skills-logo hover:darken text-pink-400 "
        />
        <FontAwesomeIcon
          icon={faGithub}
          size="8x"
          className="skills-logo hover:darken text-black-500 "
        />
        <img
          src="./src/assets/typescript.svg"
          alt=""
          className="skills-logo hover:darken max-h-[124px]"
        />
      </div>
    </div>
  );
};

export default Skills;
