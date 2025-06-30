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
          Certified through the Meta Front-End Developer program, I’m expanding
          my expertise in UX/UI design to enhance user experiences. My
          leadership background and strong communication skills — developed
          through over 5 years as a Team Leader for a Translation and Production
          team of 25 people — allow me to thrive in dynamic development
          environments and contribute to impactful, user-focused software
          solutions.
          <br />
          <br />
          Since December 2021, I’ve also been teaching English as a Second
          Language (ESL), combining my experience in translation, music, and
          software development to create engaging, well-rounded lessons. My
          students love the wide variety of topics we explore together, which
          helps them speak more freely and confidently while improving their
          fluency in a natural and enjoyable way.
        </p>
      </div>
    </div>
  );
};

export default About;
