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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis enim! Saepe quae porro at sed debitis! Recusandae impedit
          doloremque quia perspiciatis ad cupiditate aspernatur sint obcaecati
          placeat, reprehenderit, itaque unde fuga dolorem quisquam totam vitae?
          Molestias sapiente error id distinctio, eaque earum a accusamus
          officiis repellat vitae dicta veniam.{" "}
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          reprehenderit earum quis nam accusantium maxime officia rem
          perferendis soluta voluptatibus debitis dicta illo libero fugit,
          molestiae id! Doloremque, laborum! Voluptatibus odit unde quod
          repellendus, sed sapiente minus consectetur ut earum. Aperiam, cumque
          quidem tenetur exercitationem rem quam provident excepturi error?
        </p>
      </div>
    </div>
  );
};

export default About;
