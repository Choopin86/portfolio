import React, { useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  // Detect current path
  const location = useLocation();
  const onTalkPage = location.pathname === "/talk-with-me";

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">Ledjan</h1>
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) =>
          onTalkPage ? (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <RouterLink to={`/#${link}`} onClick={() => setNav(false)}>
                {link}
              </RouterLink>
            </li>
          ) : (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <ScrollLink
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {link}
              </ScrollLink>
            </li>
          )
        )}

        <li className="px-4 cursor-pointer capitalize font-medium text-indigo-400 hover:scale-105 duration-200">
          <RouterLink to="/talk-with-me" onClick={() => setNav(false)}>
            Talk With Me
          </RouterLink>
        </li>
      </ul>

      {/* Mobile menu toggle button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute 
          top-0 left-0 w-full h-screen bg-gradient-to-b from-black
          to-gray-800 text-gray-500 md:hidden"
        >
          {links.map(({ id, link }) =>
            onTalkPage ? (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                onClick={() => setNav(false)}
              >
                <RouterLink to={`/#${link}`}>{link}</RouterLink>
              </li>
            ) : (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                onClick={() => setNav(false)}
              >
                <ScrollLink to={link} smooth duration={500}>
                  {link}
                </ScrollLink>
              </li>
            )
          )}

          <li
            className="px-4 cursor-pointer capitalize py-6 text-4xl text-indigo-400"
            onClick={() => setNav(false)}
          >
            <RouterLink to="/talk-with-me">Talk With Me</RouterLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
