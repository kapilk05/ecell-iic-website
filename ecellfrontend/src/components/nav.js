import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export class Navbar extends Component {
  render() {
    return (
      <body data-spy="scroll" data-target="#navbar">
        <nav
          id="navbar"
          className="navbar navbar-expand-xl navbar-dark sticky-top"
        >
          <a className="nav-link logo logo-nav navbar-brand" href="#">
            <img src={Logo} alt="" /> DJSCE E-cell
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ml-auto nav-pills" id="navitems">
              {/* <a className="nav-link logo logo-nav" href="#"
              ><img src="images/logo.png" alt="" />
              </a>
              <li className="nav-item brand-name">
                <a className="nav-link logo-nav" href="#">Ecell</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hvr-underline-from-left"
                  href="#features"
                >
                  Get Started <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#startup">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hvr-underline-from-left"
                  to="/partners"
                >
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hvr-underline-from-left"
                  href="team.html"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <a className="nav-btn hvr-icon-forward">Get in touch</a>
        </nav>
      </body>
    );
  }
}
export default Navbar;
