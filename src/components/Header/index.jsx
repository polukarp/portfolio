import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faVk,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className="flex justify-between lowercase p-4">
      <Switch size="lg" onChange={toggleColorMode} />
      <nav>
        <ul className="flex gap-6">
          <a target="_blank" href="https://t.me/polukarp">
            <FontAwesomeIcon
              size="2xl"
              className="nav-logo"
              icon={faTelegram}
            />
          </a>

          <a target="_blank" href="https://github.com/polukarp">
            <FontAwesomeIcon size="2xl" className="nav-logo" icon={faGithub} />
          </a>
          <a target="_blank" href="https://vk.com/whoreadsthatgay">
            <FontAwesomeIcon size="2xl" className="nav-logo" icon={faVk} />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
