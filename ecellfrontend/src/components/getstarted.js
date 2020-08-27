import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "../style.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { mortarBoard } from "react-icons-kit/typicons/mortarBoard";
import { scissorsOutline } from "react-icons-kit/typicons/scissorsOutline";
import { chartLineOutline } from "react-icons-kit/typicons/chartLineOutline";
import { planeOutline } from "react-icons-kit/typicons/planeOutline";
import $ from "jquery";

export class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
  }

  showForm = () => {
    console.log("Hi!");
    const el = findDOMNode(this.refs.toggle);
    $(el).style.display = "block";
    $("html,body").animate(
      {
        scrollTop: this.myInput.offset().top,
      },
      100
    );
  };

  render() {
    return (
      <div id="features">
        <div className="container text-md-center section-holder">
          <h1 className="blue-text">Get Started</h1>
          <div className="row">
            <div className="feature col-lg-4 purple">
              <span className="circle">
                <Icon icon={mortarBoard} size={40}></Icon>
              </span>
              <h4>Mentorship</h4>
              <p>
                CloudCheckr provides summary and detailed usage statistics for
                resources.
              </p>
            </div>
            <div className="feature col-lg-4 blue">
              <span className="circle">
                <Icon icon={scissorsOutline} size={40}></Icon>
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
              <span className="circle">
                <Icon icon={planeOutline} size={32}></Icon>
              </span>
              <h4>Accelerators & Incubator</h4>
              <p>
                CloudCheckr provides summary and detailed usage statistics for
                resources.
              </p>
            </div>
            <div className="feature col-lg-4 red">
              <span className="circle">
                <Icon icon={chartLineOutline} size={35}></Icon>
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
            <button onclick={this.showForm} className="btn hvr-icon-forward">
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

            <div
              className="container"
              ref="toggle"
              style={{
                display: "none",
              }}
            >
              <div className="row">
                <div className="col-md-2"></div>

                <div className="col-md-8 idea_form">
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
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GetStarted;
