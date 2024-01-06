import React from "react";

import "../styling/Navbar.css";

import { useState } from "react";

import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/lab website logo.png";

const Navbar1 = () => {
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
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/vulnerabilities">VULNERABILITES</Link>
        </li>

        <li>
          <Link to="/publications">PUBLICATIONS</Link>
        </li>

        <li>
          <Link to="/about">ABOUT US</Link>
        </li>

        <li>
          <Link to="/research">RESEARCH</Link>
        </li>

        <li>
          <Link to="/contact">CONTACT US</Link>
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

export default Navbar1;
