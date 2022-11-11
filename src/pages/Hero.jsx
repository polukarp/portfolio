import { Heading } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row justify-center items-center">
      <div className="px-4 flex flex-col gap-4  flex-1 ">
        <Heading size={"4xl"}>
          Привет! Меня зовут <br />
          <span>Данил, и я</span>
        </Heading>

        <Heading
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text  "
          size={"2xl"}
        >
          &lt;Web-Разработчик /&gt;
        </Heading>
      </div>

      {/* <div className="aspect-square rounded-[50%] overflow-hidden ">
        <img
          className="max-w-[300px]  w-auto h-auto"
          src="./src/assets/images/1668179752850.jpeg"
          alt="My photo"
        />
      </div> */}
    </div>
  );
};

export default Hero;
