import React, { useEffect } from "react";
import bay from "./../../images/bay.png";
import Title from "../reusable/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Details.css";

const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="test">
      <Title title="Ce que je fais?" />
      <div className="section2">
        <div data-aos="zoom-in-up" className="details">
          <h2 className="details-h2">
            <span>Dévelopment Web: </span>
            <span>Full-Stack</span>
          </h2>
          <p>Compétences:</p>
          <ul>
          <li>HTML5, CSS3, Bootstrap, Javascript, Github</li>
          <li>React.Js</li>
          <li>Php, Symfony</li>
          <li>Node.js</li>
          <li>REST Apis</li>
          <li>Responsive design(Mobile, Tablet, Grande écran)</li>
          </ul>
        </div>
        <div>
          <img
            data-aos="zoom-in-up"
            className="bay"
            src={bay}
            alt="baymax at what i do"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
