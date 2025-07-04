import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center px-4 py-12 pt-24 md:flex-row"
      >
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello World
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

          <p className="text-gray-400 py-4 max-w-md">
            I’m a dedicated front-end developer with over 10 years of experience
            in Audio Engineering, Translation, and Team Leadership. Specializing
            in building user-friendly web applications with modern technologies
            such as HTML5, CSS, JavaScript, React.js, and TailwindCSS, I focus
            on creating responsive, high-functioning solutions.
          </p>

          <p className="text-gray-400 py-2 max-w-md">
            With my diverse background as a Software Developer, passionate
            Pianist, Music Producer, and skilled Translator, I bring a unique
            blend of creativity and precision to helping you improve your
            English speaking skills. Whether you’re a professional aiming to
            polish your business English or someone eager to boost your personal
            language development, I’m here to guide you every step of the way.
            Let’s make learning English an exciting and rewarding journey
            together — feel free to book a class and start speaking confidently
            today!
          </p>
        </div>

        <div className="mx-auto px-8 mt-12 md:mt-0 md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-2/3 mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
