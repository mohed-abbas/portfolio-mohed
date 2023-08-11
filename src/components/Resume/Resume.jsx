import React, { useEffect } from "react";
import Title from "./../reusable/Title";
import ProgressBar from "../reusable/ProgressBar";
import Svg from "./../../images/image.svg";
import reactz from "./../../images/react.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Resume.css";
import {
  images,
  information,
  experience,
  ProgressBarDetails,
  fieldExperience
} from "./ResumeDetails.js";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="resume">
      <div className="title">
        <Title title="Résumé" />
      </div>
      <div className="details_section">
        {/* Section 1 */}
        <div className="rSection_1">
          <img
            data-aos="fade-right"
            className="arrows"
            src={Svg}
            alt="My Resume Arrows"
          />
          {/* Education Details Box */}
          <div data-aos="fade-left" className="box_placement">
          <div className="eduDetails">
            {information.map((info) => {
              return (
                <div className="my_details" key={info.id}>
                  <p>
                    <span className="details_bold">{info.level}</span>
                    <span className="details_normal"> ({info.year})</span>
                  </p>
                  <p className="details_normal details_medium">
                    {info.institue}
                  </p>
                </div>
              );
            })}
            </div>
            <div className="workDetails">
            {fieldExperience.map((fieldExp) => {
                return (
                  <div className="my_details" key={fieldExp.id}>
                    <p>
                      <span className="details_bold">{fieldExp.post}</span>
                      <span className="details_normal"> ({fieldExp.year})</span>
                    </p>
                    <p className="details_normal details_medium">
                      {fieldExp.enterprise}
                    </p>
                </div> )
            })}
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="rSection_2">
          {/* Experience section */}
          <div data-aos="fade-right" className="experience">
            {experience.map((exp) => {
              return (
                <span className={exp.classname} key={exp.id}>
                  <p className="expBold">{exp.year}</p>
                  <p className="expNormal">{exp.title}</p>
                </span>
              );
            })}
          </div>
          {/* Icons */}
          <div data-aos="fade-right" className="icons">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.name}
                  alt={image.tag}
                  className={image.name === reactz ? "react" : " "}
                />
              );
            })}
          </div>
          {/* Progress Bar */}

          <div data-aos="fade-right" className="barDisplay">
            {ProgressBarDetails.map((bar) => {
              return (
                <div className="barDiv" key={bar.title}>
                  <ProgressBar
                    title={bar.title}
                    width={bar.width}
                    animation={bar.animation}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
