import React from "react";
import "../styling/AboutUsIntro.css";
import AboutUsIntroImage from "../assets/AboutUsIntroImage.png";
import honeycombData from "../jsonFiles/CollaborationsData.json";

const AboutUsIntro = () => {
  return (
    <div>
      <div
        className="AboutUsIntroContainer"
        // style={{ backgroundImage: `url(${AboutUsIntroImage})`,height:"100%" }}
      >
        <img
          className="AboutUsIntroImg"
          src={AboutUsIntroImage}
          alt="cybersecurity images"
        />
        <div className="AboutUsIntroContainerOverlay">
          <div className="AboutUsIntroContent">
            <div className="AboutUsIntroContent1">
              <p>
                VJTI is selected under TEQIP-II (subcomponent 1.2.1) for
                establishment of Centre of Excellence (CoE) in "Complex &
                Nonlinear Dynamical Systems (CNDS)" with a funding of Rs 5
                Crores by World Bank through National Project Implementation
                Unit (NPIU), MHRD, New Delhi. The main objective of the CoE CNDS
                is to act as a focal point for the interdisciplinary research
                into the theory of complex and nonlinear dynamical systems and
                its applications across science and engineering branches.Main
                areas and application domains include complex power grid/smart
                grid modeled as cyber-physical system (CPS), nonlinear dynamics
                & transient stability of electrical pulse power & plasma
                systems, hybrid energy management systems for clean renewable
                energy & nonlinear vibration analysis. VJTI is having a long
                history of expertise in these areas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUsIntroContent2">
        <div className="talkbubbleContainer">
          <div className="talkbubble">
            <p>
              Centre of Excellence (CoE) was established under World Bank
              initiative of TEQIP (Technical Education Quality Improvement
              Program)
            </p>
          </div>
          <div className="talkbubble">
            <p>
              Competitive funding from 163 shortlisted proposals across India
              including NITs.
            </p>
          </div>
          <div className="talkbubble">
            <p>
              Industry support- Emerson, Siemens, L&T, CISCO, Claroty, Schneider
            </p>
          </div>
          <div className="talkbubble">
            <p>Theme- CPS Application Domains- Critical Infrastructure</p>
          </div>
        </div>
      </div>

      <div className="collaborationsContainer">
        <ul className="honeycomb" lang="es">
          {honeycombData.map((item, index) => (
            <li key={index} className="honeycomb-cell">
              <img
                className="honeycomb-cell__image"
                src={item.imageUrl}
                alt="Indian Flag"
              />
              <div className="honeycomb-cell__title">
                {item.title}
                <div className="honeycomb-cell__subtitle">
                  {item.subtitle}
                </div>{" "}
              </div>
            </li>
          ))}
          <li className="honeycomb-cell honeycomb__placeholder"></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsIntro;
