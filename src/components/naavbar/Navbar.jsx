import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./../reusable/button";
import logo from "./../../images/logo.png";
import MohedCv from "./../../images/Abbas-Mohed-CV.pdf";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleClose = () => {
    this.setState({ clicked: false });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="MyLogo"></img>
          </a>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars className="rotate" />}
        </div>
        <div className="navbar-items">
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link
                  className="nav-links"
                  to="/"
                  smooth
                  onClick={this.handleClose}
                >
                  Home
                </Link>
            </li>
            <li>
                <Link
                  className="nav-links"
                  to="/#resume"
                  smooth
                  onClick={this.handleClose}
                >
                  Resume
                </Link>
            </li>
            <li>
                <Link
                  className="nav-links"
                  to="/#contact"
                  smooth
                  onClick={this.handleClose}
                >
                  Contact
                </Link>

            </li>
            <li>
                <Link
                  className="nav-links"
                  to="/services"
                  smooth
                  onClick={this.handleClose}
                >
                  Services
                </Link>
            </li>
            <li>
                <Link
                  className="nav-links"
                  to="/portfolio"
                  smooth
                  onClick={this.handleClose}
                >
                  Portfolio
                </Link>
            </li>
          </ul>
        </div>
        <div className="mb-btn">
          <a
            href={MohedCv}
            // download="MohedCv"
            rel="noreferrer"
            target="_blank"
          >
            <Button classes="btn-round" text="Voir Mon CV" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
