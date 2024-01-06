import React from "react";

import "../styling/Footer.css";

import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="left">
        <div className="location">
          <p>
            <TfiLocationPin
              size={15}
              style={{ color: "white", marginRight: "10px", paddingTop: "2px" }}
            />{" "}
            VJTI Matunga COE ends Lab Mumbai- 400019
          </p>
        </div>

        <div className="email">
          <p>
            <AiOutlineMail
              size={15}
              style={{ color: "white", marginRight: "10px", paddingTop: "2px" }}
            />
            vaibhavivdhas28@gmail.com
          </p>
        </div>
      </div>

      <div className="right">
        <h4>Some Information About Us</h4>
        <p>Lorrem Ipsum</p>

        <div className="social">
          <AiOutlineGithub size={20} style={{ color: "white" }} />
          <AiOutlineTwitter size={20} style={{ color: "white" }} />
          <AiOutlineLinkedin size={20} style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
