import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ThreeLogo from "./ThreeLogo";
import MohedCv from "./../../images/Abbas-Mohed-CV.pdf";
import Button from "../reusable/button";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Header.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowElement(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const text = "Développeur Web";

  return (
    <section id="home" className="hero">
      <div data-aos="zoom-in-up">
        <ThreeLogo />
      </div>
      <h1>Salut! Je suis Mohed.</h1>
      <h2 className="typing">
        {showElement ? (
          text
        ) : (
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            words={[
              "Développeur Web",
              "Concepteur UI/UX",
              "Compagne web care",
            ]}
          />
        )}
      </h2>
      <p>
        Le code est comme l&apos;humour. Quand il faut l&apos;expliquer, c&apos;est mal
        vraiment mal !
      </p>
      <a href={MohedCv} rel="noreferrer" target="_blank">
        <Button classes="btn-round" text="Voir Mon CV" />
      </a>
    </section>
  );
};

export default Header;
