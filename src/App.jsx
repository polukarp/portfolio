import { ChakraProvider } from "@chakra-ui/react";
import "./App.scss";

import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Header from "./components/Header";
import About from "./pages/About";

function App() {
  const projects = [
    {
      title: "Wordle Clone",
      description:
        "Wordle - браузерная игра в слова, в которой пользователю предлагается угадать пятибуквенное английское слово за шесть попыток. Механика игры сделана с использованием связки React-Redux.",
      image: "Screenshot 2022-11-10 at 23.50.11.png",
      link: "https://wordle-clone-ten-psi.vercel.app/",
    },
    {
      title: "ToDo-приложение",
      description:
        "Простейшее ToDo-приложение с использованием библиотеки DaisyUI. ",
      image: "Screenshot 2022-11-11 at 14.27.06.png",
      link: "https://todo-app-react-ruby-eight.vercel.app/",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4">
      <ChakraProvider>
        <Header />
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills />
      </ChakraProvider>
    </div>
  );
}

export default App;
