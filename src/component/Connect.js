import React from "react";
import "../styling/Connect.css";

import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import connectImage from "../assets/Cisco.jpeg";
import connectBkg from "../assets/BackgroundImage4.png";

const Connect = () => {
  return (
    <div className="totalContainer">
      <div className="connectContainer" id="scrollAbout">
        <div className="connectImg">
          <img src={connectImage} alt=""></img>
        </div>
        <div className="connectAboutUs">
          <h1>About Us</h1>
          <p>
            The Centre of Excellence in Complex & Nonlinear Dynamical Systems
            (CoE-CNDS), was founded in 2013. The CoE-CNDS provides a platform
            for those students interested in the field of complex and nonlinear
            dynamical systems. Under the CoE-CNDS various one day seminar and
            one week workshops on various topics of nonlinear dynamical systems
            are conducted. Also different training facilities and consultancy
            services are being offered.
          </p>
          <div className="connectLink">
            <Link to="/about">
              <span className="connectbutton">
                <p className="arrowIcon2">
                  Read more{"  "}
                  <AiOutlineArrowRight size={15} style={{ color: "white" }} />
                </p>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="connectBkgImg"
        style={{
          backgroundImage: `url(${connectBkg})`,
        }}
      >
        <div className="content2Container">
          <div className="connectContent2" id="scrollResearch">
            <p>
              Center of Excellence (CoE) in "Complex and Nonlinear Dynamical
              Systems (CNDS)" group has 10 core faculty members and about 10
              Research Fellows having diverse research backgrounds working
              together to contribute effeciently towards the researching
              society. The average doctoral strength is around 10-15 scholars
              working full time/part time towards their PhD in the relevant
              areas of CoE CNDS. The group has a keen focus in the research
              domains ranging from power grid to smart grid modeled as
              cyber-physical system (CPS), nonlinear dynamics & transient
              stability of electrical pulse power & plasma systems, hybrid
              energy management systems for clean renewable energy & nonlinear
              vibration analysis.
            </p>
            <div className="connectLink2">
              <Link to="/research">
                <div className="connectbutton2">
                  <h6>
                    {" "}
                    Know more{" "}
                    <AiOutlineArrowRight size={15} style={{ color: "white" }} />
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
