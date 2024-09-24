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
          As a passionate and self-driven junior Front-End Developer, I bring a
          unique blend of skills from my background in Audio/Video Production,
          Translation, and Teaching. Certified in HTML, CSS, JavaScript, and
          React.js, I am committed to creating modern, responsive web
          applications that prioritize user experience and functionality. I have
          completed comprehensive training through the Meta Front-End Developer
          Professional Certificate and am currently expanding my expertise in
          UX/UI design. My ability to quickly adapt, coupled with strong
          communication and problem-solving skills, allows me to approach
          challenges with a creative and solution-oriented mindset.
        </p>

        <br />

        <p className="text-xl">
          Throughout my career, I have honed my leadership abilities, working as
          a team leader in Audio/Video Production, where I coordinated large
          teams to ensure the delivery of high-quality digital content. My role
          as an English teacher has further refined my capacity to communicate
          complex ideas effectively. Now, I am excited to leverage this diverse
          experience in the world of web development, eager to contribute to
          projects that help individuals and organizations achieve their goals
          through well-crafted software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
