import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a junior Front-End Developer with a background in Audio/Video
          Production, Translation, and Teaching, I bring skills in HTML, CSS,
          JavaScript, and React.js to create responsive, user-centered web
          applications. Certified through the Meta Front-End Developer program,
          I'm expanding my expertise in UX/UI design while maintaining a strong
          focus on functionality and user experience.
        </p>

        <br />

        <p className="text-xl">
          With experience leading teams in Audio/Video Production and clear
          communication skills honed through teaching, I'm eager to leverage my
          diverse background in web development to contribute to impactful
          software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
