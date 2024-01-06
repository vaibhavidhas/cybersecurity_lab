import React from "react";
import "../styling/ContactDirect.css";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const contactDirect = () => {
  return (
    <div id="scrollContact" className="contactDirectContainer">
      <div className="contactBox">
        <p className="contactTitle">Card Title</p>
        <p className="contactDesign">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          deleniti officia. Aliquam repellendus illum pariatur nesciunt dolor et
          natus consectetur repudiandae suscipit autem distinctio commodi vel
          sed, id inventore modi.
        </p>
        <p className="contactText">
          <Link to="/contact">
            <button class="contactButton">
              {" "}
              <p className="buttontext">let's get connected</p>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </p>
      </div>

      <div className="footer">
        <div className="footerInfo">
          <div className="location">
            <p>
              <TfiLocationPin
                size={15}
                style={{
                  color: "white",
                  marginRight: "10px",
                  paddingTop: "2px",
                }}
              />{" "}
              VJTI Matunga COE Cnds Lab Mumbai- 400019
            </p>
          </div>

          <div className="email">
            <p>
              <AiOutlineMail
                size={15}
                style={{
                  color: "white",
                  marginRight: "10px",
                  paddingTop: "2px",
                }}
              />
              vaibhavivdhas28@gmail.com
            </p>
          </div>

          <div className="social">
            <AiOutlineGithub
              size={20}
              style={{ color: "white", margin: "7px" }}
            />
            <AiOutlineTwitter
              size={20}
              style={{ color: "white", margin: "7px" }}
            />
            <AiOutlineLinkedin
              size={20}
              style={{ color: "white", margin: "7px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactDirect;
