import React, { useEffect } from "react";
import logo from "./../../images/logo.png";
import facebook from "./../../images/icons/facebook.png";
import fiverr from "./../../images/icons/fiverr.png";
import insta from "./../../images/icons/instagram.png";
import ln from "./../../images/icons/linkedin.png";
import twitter from "./../../images/icons/twitter.png";
import mail from "./../../images/icons/mail.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const icons = [
    {
      icon: facebook,
      alt: "My Facebook profile link",
      href: "https://www.facebook.com/mohed.abbas.5/",
    },
    {
      icon: insta,
      alt: "My instagram Profile link",
      href: "https://www.instagram.com/mohed._.abbas/",
    },
    {
      icon: ln,
      alt: "My Linkedin Profile link",
      href: "https://www.linkedin.com/in/mohed-abbas/",
    },
    {
      icon: twitter,
      alt: "My twitter Profile link",
      href: "https://twitter.com/mohed332",
    },
    { icon: fiverr, alt: "My fiverr Profile link",href:"https://www.fiverr.com/mohedabbas" },
    { icon: mail, alt: "My Email", href: "mailto:mohed332@gmail.com" },
  ];
  return (
    <>
      <div className="footer">
        <div className="line"></div>
        <a href="/">
          <img className="footer_logo" src={logo} alt="My Logo" />
        </a>
      </div>
      <div className="footerIcons">
        {icons.map((icon, index) => {
          return (
            <div className="footer-icon">
              <a href={icon.href} target="_blank" rel="noreferrer">
                <img src={icon.icon} alt={icon.alt} />
              </a>
            </div>
          );
        })}
      </div>
      <h6 className="copyright">Mohed @ 2023 All Rights Reserved</h6>
    </>
  );
};

export default Footer;
