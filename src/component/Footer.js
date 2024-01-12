import React from "react";
import "../styling/Footer.css";
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
        <h3>
          CENTER OF EXCELLENCE (COE), IN COMPLEX & NONLINEAR DYNAMICAL SYSTEMS -
          (CNDS)
        </h3>
        <div className="contactInfocontent">
          <p>
            <TfiLocationPin
              style={{
                color: "white",
              }}
            />
            Veermata Jijabai Technological Institute (VJTI), H. R. Mahajani
            Road, Matunga (E), Mumbai - 400019, Maharashtra, India.
          </p>

          <p>
            <AiOutlineMail
              size={15}
              style={{
                color: "white",
              }}
            />
            Email Id: coe.cnds@vjti.org.in
          </p>

          <div className="footer">
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
    </div>
  );
};

export default contactDirect;
