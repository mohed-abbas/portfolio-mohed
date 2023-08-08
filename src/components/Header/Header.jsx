import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import baymax from "./../../images/baymaxhome.png";
// import Lines from "../reusable/Lines";
import MohedCv from "./../../images/CV-2023-Mohed.pdf";
import Button from "./../reusable/button";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Header.css";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 2500);
  }, []);

  const text = " Développeur Web";
  return (
    <div id="home">
      <div className="header">
        <div className="left-text size text-header">
          <h4 data-aos="fade-down">
          Salut! Je suis Mohed. <br />
            Votre
            {showElement ? (
              <span className="typing">{text}</span>
            ) : (
              <span className="typing">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1000}
                  words={[
                    " Développeur Web",
                    " Concepteur UI/UX",
                    " Compagne web care",
                  ]}
                />
              </span>
            )}
          </h4>
        </div>
        <div data-aos="zoom-in-up" className="baymax">
          <img className="baymax-home" src={baymax} alt="Baymax " />
        </div>
        <div className="mbs-btn">
          <a
            href={MohedCv}
            download="MohedCv"
            rel="noreferrer"
            target="_blank"
          >
            <Button classes="btn-round" text="Télécharger CV" />
          </a>
        </div>
        <div className="size text-header">
          <h4 data-aos="fade-down" className="right-text">
            {/* Lorem ipsum is simply <br /> dummy text for the printing <br /> and
            typesetting industry */}
            Le code est comme l'humour.
            <br /> Quand il faut l'expliquer, <br /> 
            C'est mal vraiment mal !.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
