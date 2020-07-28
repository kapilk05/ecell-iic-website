import React, { Component } from "react";
import "../style.css";
import "../global.css";
import "../hover.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Video from "../video/startup.mp4";

export class Startup extends Component {
  constructor(props) {
    super(props);
    this.showStudent = this.showStudent.bind(this);

    this.state = {
      startups: [],
    };
  }
  showStudent = function () {
    document.getElementById("studentInfo").style.display = "block";
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/startup/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((startups) => {
        this.setState({ startups });
      });
  }
  render() {
    return (
      <div>
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
            <Link />
            <button className="btn hvr-icon-forward">
              Launch your Startup
            </button>

            <i className="zmdi zmdi-arrow-right hvr-icon"></i>
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
                <i className="fa fa-long-arrow-alt-right hvr-icon"></i>
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
                          <i
                            className="fa fa-facebook-f fab-lg"
                            id="allicon"
                          ></i>
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
        <div id="features">
          <div className="container text-md-center section-holder">
            <h1 className="blue-text">Get Started</h1>
            <div className="row">
              <div className="feature col-lg-4 purple">
                <span className="circle">
                  <ion-icon name="school-outline"></ion-icon>
                </span>
                <h4>Mentorship</h4>
                <p>
                  CloudCheckr provides summary and detailed usage statistics for
                  resources.
                </p>
              </div>
              <div className="feature col-lg-4 blue">
                <span className="circle">
                  <ion-icon name="construct-outline"></ion-icon>
                </span>
                <h4>Technical Assistance</h4>
                <p>
                  CloudCheckr provides summary and detailed usage statistics for
                  resources.
                </p>
              </div>
              <div className="feature col-lg-4 green">
                <span className="circle">
                  <span
                    className="iconify"
                    data-icon="la:piggy-bank-solid"
                    data-inline="false"
                  ></span>
                </span>
                <h4>VCs & Angel Network</h4>
                <p>
                  CloudCheckr provides summary and detailed usage statistics for
                  resources.
                </p>
              </div>
              <div className="feature col-lg-4 yellow">
                <span className="circle" style={{ color: " #ffb236" }}>
                  <ion-icon name="rocket-outline"></ion-icon>
                </span>
                <h4>Accelerators & Incubator</h4>
                <p>
                  CloudCheckr provides summary and detailed usage statistics for
                  resources.
                </p>
              </div>
              <div className="feature col-lg-4 red">
                <span className="circle">
                  <ion-icon name="trending-up-outline"></ion-icon>
                </span>
                <h4>Market Advisory</h4>
                <p>
                  CloudCheckr provides summary and detailed usage statistics for
                  resources.
                </p>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="main container section-holder">
              <h4>Have a business idea?</h4>
              <h1 className="cta">Launch your startup!</h1>
              <button
                className="btn hvr-icon-forward"
                onclick={this.showStudent}
              >
                Get Started
                <i className="zmdi zmdi-arrow-right hvr-icon"></i>
              </button>

              <div className="container">
                <div className="toast mt-3">
                  <div className="toast-header">Toast Header</div>
                  <div className="toast-body">
                    Some text inside the toast body
                  </div>
                </div>
              </div>

              <div className="container" id="idea_submission">
                <div className="row">
                  <div className="col-md-2"></div>

                  <div className="col-md-8 idea_form">
                    <h1>Submit your Idea</h1>
                    <label for="name">Full Name</label>
                    <input name="name" type="text" id="name" />
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <label for="email">Email</label>
                        <input name="email" type="email" id="email" required />
                        <br />
                      </div>
                      <div className="col-md-6">
                        <label for="contact">Contact Number</label>
                        <input name="contact" type="tel" id="contact" />
                        <br />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 radioStudent">
                        Are you a student?
                        <br />
                        <div className="radioButton">
                          <input
                            type="radio"
                            id="male"
                            name="student"
                            value="Yes"
                            onclick="showStudent();"
                          />
                          <label for="Yes">Yes</label>
                          <br />
                          <input
                            type="radio"
                            id="No"
                            name="student"
                            value="No"
                          />
                          <label for="No">No</label>
                          <br />
                        </div>
                      </div>
                      <div className="col-md-6 radioBusiness">
                        Type of business
                        <select id="business" name="business">
                          <option value="Sole Proprietorship" selected>
                            Sole Proprietorship
                          </option>
                          <br />
                          <option value="Partnership">Partnership</option>
                          <br />
                        </select>
                        <br />
                      </div>
                    </div>
                    <div className="row" id="studentInfo">
                      <div className="col-md-6">
                        <select id="stream" name="stream">
                          <option value="CSE" selected>
                            CSE
                          </option>
                          <br />
                          <option value="Computer">Computer</option>
                          <br />
                          <option value="IT">IT </option>
                          <br />
                          <option value="EXTC">EXTC</option>
                          <br />
                          <option value="Electronics">Electronics </option>
                          <br />
                          <option value="Chemical">Chemical</option>
                          <br />
                          <option value="Mechanical">Mechanical</option>
                          <br />{" "}
                        </select>
                        <br />
                      </div>
                      <div className="col-md-6">
                        <select id="year" name="year">
                          <option value="FE" selected>
                            FE
                          </option>
                          <br />
                          <option value="SE">SE</option>
                          <br />
                          <option value="TE">TE</option>
                          <br />
                          <option value="BE">BE </option>
                          <br />{" "}
                        </select>
                        <br />
                      </div>
                    </div>
                    <textarea
                      rows="4"
                      cols="72"
                      name="idea"
                      form="idea"
                      placeholder="Tell us about your idea!"
                    ></textarea>
                    <button
                      className="btn"
                      type="submit"
                      id="submit_idea"
                      style={{ "margin-top": "10px" }}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section-holder" id="startup">
          <h1 className="">Startups</h1>
          <div className="row" id="card_display">
            {this.state.startups.map((u) => (
              <div className="col-md-3" id="column_startup">
                <img className="startup_holder" src={u.logo} />
                <p>{u.intro}</p>
                <Link to={u.link} className="peach-text startup_more"></Link>
                Read More
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Startup;
