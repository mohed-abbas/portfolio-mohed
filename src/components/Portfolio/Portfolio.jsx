import React, { useEffect } from "react";
import nf from "./../../images/nf.png";
import "./Portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { projectsDetails } from "./PortfolioDetails";
import Project from "../Project/Project";
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
    <div className="title">
    {/* <h1 className="h1">Projets</h1> */}
    </div>
      <div className="portfolio-s">
        {projectsDetails.map((project) => (
        <Project project={project}  key={project.name}/>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
