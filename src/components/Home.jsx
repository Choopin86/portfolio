import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black 
        via-black  to-gray-800"
      >
        <div
          className="max-w-screen-lg mx-auto flex flex-col 
          items-center justify-center h-full px-4 md:flex-row"
        >
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Hello World
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I'm a passionate frontend developer with a diverse background in
              Audio Engineering, Translation, and over 10 years of leadership
              experience managing production and translation teams. I specialize
              in building intuitive, user-friendly applications using modern
              technologies like HTML5, CSS, JavaScript, React.js, and
              TailwindCSS.
            </p>
            <div>
              <button
                className="group text-white w-fit px-6 py-3 my-2 flex items-center
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="px-4 rounded-full mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
