import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <div id="aboutus" className="section-holder container">
        <h1 className="blue-text">About us</h1>

        <div
          className="row intro-sec"
          style={{ "justify-content": "space-around" }}
        >
          <div className="col-md-5 intro" style={{ "text-align": "left" }}>
            <h2>We help convert ideas to startups.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              omnis ipsa numquam inventore aperiam facere odit molestias nulla
              non ipsam?
            </p>
            <Link to="/about" className="hvr-icon-forward">
              Read More
              <i className="zmdi zmdi-arrow-right hvr-icon"></i>
            </Link>
          </div>
          <div className="col-md-4">
            <div className="img-container">&nbsp;</div>
          </div>
        </div>
        <div className="container counter">
          <div className="b-section black bp-0">
            <div className="b-container">
              <div className="b-3-col">
                <div className="b-meta-container">
                  <div className="b-meta grey"></div>
                  <div className="b-meta-line grey">At DJ-ECELL</div>
                </div>
              </div>
              <div className="b-8-col">
                <h2
                  className="b-h1 grey counter-heading"
                  style={{ "font-weight": "300" }}
                >
                  We Are Growing Quickly
                </h2>
                <div className="container iconcont">
                  <div className="b-8-col numbers-container row">
                    <div className="col-md-3 home---about-stat-wrapper">
                      <div className="home---about-vertical-blue-line"></div>
                      <div className="home---about-stat-text-box">
                        <i className="fa fa-instagram" id="allicon"></i>
                        <div className="item-animate">
                          <h2 className="counteranimation2">0</h2>
                        </div>

                        <div className="home---about-stat-icon-box">
                          <p className="home---about-stat-icon-text">
                            Instagram Followers
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 home---about-stat-wrapper">
                      <div className="home---about-vertical-blue-line"></div>
                      <div className="home---about-stat-text-box">
                        <i className="fa fa-facebook-f fab-lg" id="allicon"></i>
                        <div className="item-animate">
                          <h2 className="counteranimation4">0</h2>
                        </div>

                        <a
                          href="/for-deletion/videos-old"
                          className="home---about-stat-icon-box w-inline-block"
                        >
                          <p className="home---about-stat-icon-text">
                            Facebook Followers
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 home---about-stat-wrapper">
                      <div className="home---about-vertical-blue-line"></div>
                      <div className="home---about-stat-text-box">
                        <i className="fa fa-youtube" id="allicon"></i>
                        <div className="item-animate">
                          <h2 className="counteranimation3">0</h2>
                        </div>

                        <a
                          href="http://academy.thefutur.com"
                          target="_blank"
                          className="home---about-stat-icon-box w-inline-block"
                        >
                          <p className="home---about-stat-icon-text">
                            YouTube Subscribers
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 home---about-stat-wrapper">
                      <div className="home---about-stat-text-box">
                        <i className="fa fa-linkedin" id="allicon"></i>
                        <div className="item-animate">
                          <h2 className="counteranimation1">0</h2>
                        </div>

                        <a
                          href="https://www.youtube.com/thefuturishere"
                          target="_blank"
                          className="home---about-stat-icon-box w-inline-block"
                        >
                          <p className="home---about-stat-icon-text">
                            LinkedIn Connection
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
