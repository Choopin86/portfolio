import React from "react";
import Calculator from "../assets/Portfolio/Calculator.png";
import GameHub from "../assets/Portfolio/GameHub app.png";
import ToDo from "../assets/Portfolio/To-do app.png";
import Splitter from "../assets/Portfolio/splitter.png";

const portfolio = [
  {
    id: 1,
    src: Calculator,
    alt: "Calculator",
    link: "https://my-calculator-one-puce.vercel.app/",
    code: "https://github.com/Choopin86/my-calculator",
  },
  {
    id: 2,
    src: GameHub,
    alt: "Game-Hub",
    link: "https://gamehub-fawn-gamma.vercel.app/",
    code: "https://github.com/Choopin86/game_hub.git",
  },
  {
    id: 3,
    src: ToDo,
    alt: "To-Do List",
    link: "https://todo-app-bay-xi-44.vercel.app/",
    code: "https://github.com/Choopin86/todo-app-main.git",
  },
  {
    id: 4,
    src: Splitter,
    alt: "Splitter",
    link: "https://splitter-bay.vercel.app/",
    code: "https://github.com/Choopin86/tip-calculator",
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
      w-full text-white min-h-screen pt-24 pb-12"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500 mb-4"
          >
            Portfolio
          </p>
          <p className="py-6">Check out my latest projects below!</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
          px-12 sm:px-0"
        >
          {portfolio.map(({ id, src, alt, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105"
                >
                  Open
                </button>
                <button
                  onClick={() => window.open(code, "_blank")}
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
