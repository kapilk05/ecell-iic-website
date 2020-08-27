import React, { Component, Fragment } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Video from "../video/startup.mp4";
import { Icon } from "react-icons-kit";
import { arrowRight2 } from "react-icons-kit/icomoon/arrowRight2";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="fullscreen-video-wrap">
          <video src={Video} autoplay="true" loop="true" muted></video>
        </div>
        <div className="header-overlay"></div>

        <div className="v-header container">
          <div className="header-content text-md-center">
            <h1>The destination of innovation, the store house of ideas</h1>
            <p className="white-text">
              We are here to provide a healthy ecosystem to make your idea
              happen, to make you an entrepreneur
            </p>
            <a className="btn hvr-icon-forward">
              Launch your Startup
              <Icon
                icon={arrowRight2}
                style={{ "padding-left": "5px" }}
                className="hvr-icon"
              ></Icon>
            </a>
          </div>
          <div className="arrow-symbol" style={{ "z-index": "2" }}>
            <a href="#events">
              <i
                className="fa fa-angle-down fa-5x"
                style={{ color: "#fff" }}
              ></i>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Header;
