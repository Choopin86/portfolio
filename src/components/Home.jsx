import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div
          className="max-w-screen-lg mx-auto flex flex-col 
          items-center justify-center h-full px-4 md:flex-row"
        >
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Hello World
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
              I’m a dedicated front-end developer with over 10 years of
              experience in Audio Engineering, Translation, and Team Leadership.
              Specializing in building user-friendly web applications with
              modern technologies such as HTML5, CSS, JavaScript, React.js, and
              TailwindCSS, I focus on creating responsive, high-functioning
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 flex items-center
                rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </ScrollLink>

              <RouterLink
                to="/talk-with-me"
                className="group text-white w-fit px-6 py-3 flex items-center
                rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 cursor-pointer"
              >
                Talk With Me
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </RouterLink>
            </div>
          </div>

          <div className="mx-auto px-8">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
