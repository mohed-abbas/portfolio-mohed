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
    show: false
  };

  
 
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleClose = () => {
    this.setState({ clicked: false });
  };

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({show: true})
    }else {
      this.setState({show: false})
    }
  }

  componentDidMount(){
    window.addEventListener("scroll" , this.handleScroll)
  }
  render() {
    return (
      <nav className={`NavbarItems ${this.state.show && "nav__color__add"}`} >
        <div>
          <Link smooth to="/#home">
            <img className="logo" src={logo} alt="MyLogo"></img>
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars className="rotate" />}
        </div>
        <div className="navbar-items">
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link
                  className="nav-links"
                  to="/#home"
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
