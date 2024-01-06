import React from "react";
import "../styling/Topics.css";
import topicsData from "../jsonFiles/TopicsData.json";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import TopicsImages from "../assets/TopicsImages.png";

const Topics = () => {
  const { topics } = topicsData;

  return (
    <div className="topicsContainer" id="scrollPublications">
      <div className="topicsSubContainer">
        {topics.map((topic, index) => (
          <div className="topicsHexagon" key={index}>
            <Link to={topic.link}>
              <div className="topicsShape">
                <img className="topicsImg" src={TopicsImages} alt=""></img>
                <h4 className="topicsContent1">{topic.title} </h4>
                <div className="topicsContent">
                  <p>{topic.content}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div>
          <Link to="/publications">
            <BsFillArrowRightSquareFill
              size={25}
              style={{ color: "rgb(135, 1, 1)" }}
              className="arrowIcon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topics;
