import React, { Component, Fragment } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import MissionVission from "../images/mission_vision.jpg";
import Idea from "../images/idea.jpg";
import { Icon } from "react-icons-kit";
import { globeOutline } from "react-icons-kit/typicons/globeOutline";
import { starOutline } from "react-icons-kit/typicons/starOutline";
import { lightbulb } from "react-icons-kit/typicons/lightbulb";
import { flashOutline } from "react-icons-kit/typicons/flashOutline";
import { chartPieOutline } from "react-icons-kit/typicons/chartPieOutline";
import { codeOutline } from "react-icons-kit/typicons/codeOutline";
import { pen } from "react-icons-kit/typicons/pen";
import { spannerOutline } from "react-icons-kit/typicons/spannerOutline";

export class AboutUs extends Component {
  render() {
    return (
      <div className="container section-holder">
        <h1 className="blue-text">About Us</h1>
        <div className="row section-holder">
          <div className="col-md-5">
            <div className="info-horizontal" style={{ "padding-top": "0" }}>
              <div className="icon">
                <Icon
                  icon={chartPieOutline}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="description">
                <h3 className="title">Vision</h3>
                <p>
                  To harbour ourselves as an incubation haven and translate to
                  an ultimate innovation destination by developing a symbolic
                  relationship between students and professionals entrepreneurs,
                  mentors, corporates and venture capitalists.
                </p>
              </div>
            </div>

            <div className="info-horizontal">
              <div className="icon">
                <Icon
                  icon={codeOutline}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="description">
                <h3 className="title">Mission</h3>
                <p>
                  To create an umbrella under which our students nurture their
                  ideas convert them to strong entrepreneurial ventures.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="img-container">
              <img src={MissionVission} className="mission_vision" />
            </div>
          </div>
        </div>
        <div className="row section-holder">
          <div className="col-md-5">
            <div
              className="img-contain"
              style={{
                backgroundImage: `url(${Idea})`,
              }}
            ></div>
          </div>
          <div className="col-md-7">
            <h3 className="heading_features">Features</h3>
            <div className="aboutus">
              <div className="about_icon">
                <Icon
                  icon={pen}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="feature_name">
                <p>Foster Entrepreneurship in DJSCE</p>
              </div>
            </div>
            <div className="aboutus">
              <div className="about_icon">
                <Icon
                  icon={flashOutline}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="feature_name">
                <p>Accelerate Innovation</p>
              </div>
            </div>
            <div className="aboutus">
              <div className="about_icon">
                <Icon
                  icon={lightbulb}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="feature_name">
                <p>Provide tinkering lab 24x7</p>
              </div>
            </div>
            <div className="aboutus">
              <div className="about_icon">
                <Icon
                  icon={spannerOutline}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="feature_name">
                <p>Driving high quality mentorship</p>
              </div>
            </div>
            <div className="aboutus">
              <div className="about_icon">
                <Icon
                  icon={globeOutline}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="feature_name">
                <p>Grow and Scale up through expert guidance</p>
              </div>
            </div>
            <div className="aboutus">
              <div className="about_icon">
                <Icon
                  icon={starOutline}
                  size={25}
                  style={{ margin: "10px 0px 0px 10px" }}
                ></Icon>
              </div>
              <div className="feature_name">
                <p>Access to startup resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
