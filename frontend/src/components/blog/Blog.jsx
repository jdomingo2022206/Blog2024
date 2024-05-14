/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {Exp} from "../experiences/Exp.jsx";
import {Skill} from "../skill/Skill.jsx";
import {Card} from "../card/Card.jsx";
import { AboutMe } from "../aboutMe/aboutMe.jsx";
import "./blog.css";

// export const Blog = ({ exp, skill, proyect }) => {
export const Blog = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="gridForData">
      <AboutMe />
      <Exp />
      <Skill />
      <Card />
    </div>
  );
};