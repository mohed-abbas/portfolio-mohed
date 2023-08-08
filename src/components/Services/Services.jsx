import React, { useEffect } from "react";
import "./Services.css";
import nf from "./../../images/nf.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="services-s">
        <h1>Désolé </h1>
        <img data-aos="zoom-in" src={nf} alt="underconstruction" />
        <h1>Cette page est en cours de développement.!!</h1>
      </div>
    </>
  );
};

export default Services;
