import React from "react";
import "../styling/Collaborations.css";
import honeycombData from "../jsonFiles/CollaborationsData.json";
// import imageUrl from "../assets/iitbImg.png"

const Collaborations = () => {
  return (
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
  );
};

export default Collaborations;
