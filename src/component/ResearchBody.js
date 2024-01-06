import React from "react";
import { Link } from "react-router-dom";

import "../styling/ResearchBody.css";
import researchData from "../jsonFiles/ResearchBodyData.json"; 
const ResearchBody = () => {
  return (
    <div className="ResearchContainer">
      {researchData.map((item) => (
        <div key={item.id} className="cardContainer">
          <div className="card">
            <img
              src={require(`../assets/researchImages/${item.imageSrc}`)}
              alt=""
            />
            <p>{item.title}</p>
            <Link to={item.link}>
              <p className="ResearchButton">Read More</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchBody;
