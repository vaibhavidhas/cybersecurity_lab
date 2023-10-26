import React from "react";

import "../styling/Navbar.css";

import { useState } from "react";

import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/lab website logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header headerBg" : "header"}>
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>

      <ul className={click ? "navbar active" : "navbar"}>
        <li>
          <Link
            to="scrollHome"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="scrollVulnerabilities"
            spy={true}
            smooth={true}
            offset={-60}
            duration={200}
          >
            VULNERABILITES
          </Link>
        </li>

        <li>
          <Link
            to="scrollPublications"
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
          >
            PUBLICATIONS
          </Link>
        </li>

        <li>
          <Link
            to="scrollAbout"
            spy={true}
            smooth={true}
            offset={-20}
            duration={300}
          >
            ABOUT US
          </Link>
        </li>

        <li>
          <Link
            to="scrollResearch"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            RESEARCH
          </Link>
        </li>

        <li>
          <Link
            to="scrollContact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
          >
            CONTACT US
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
