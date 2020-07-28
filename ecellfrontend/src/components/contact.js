import React, { Component, Fragment } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export class Contact extends Component {
  render() {
    return (
      <div className="container-contact">
        <h1 className="" style={{ "text-align": "center" }}>
          Contact Us
        </h1>
        <div className="row map">
          <div className="col-md-6 col-sm-12 map">
            <div id="map"></div>
          </div>
          <div
            className="col-md-6 col-sm-12"
            style={{ "background-color": "#faf0e6" }}
          >
            <h1 className="blue-text">Contact Us</h1>

            <form name="e-cell" id="idea">
              <div className="col-md-12">
                <label for="name"> Full Name</label>
                <input name="name" type="text" id="name" />
                <br />
              </div>
              <div className="col-md-12">
                <label for="email">Email</label>
                <input name="email" type="email" id="email" required />
                <br />
              </div>
              <div className="col-md-12">
                <label for="message">Message</label>
                <textarea
                  rows="4"
                  cols="100"
                  name="idea"
                  form="idea"
                  id="message"
                ></textarea>
              </div>
              <div className="submit_form" style={{ "text-align": "center" }}>
                <button
                  className="primary"
                  type="submit"
                  style={{ "margin-top": "30px", "margin-bottom": "30px" }}
                >
                  Send
                </button>
              </div>
              <div className="location">
                <h3>Find Us</h3>
                <h4>Location</h4>
                <p>
                  Dwarkadas J Sanghvi,
                  <br />
                  Gulmohar Road, J. V. P. D. Scheme,
                  <br />
                  Vile Parle(W), Mumbai
                </p>
                <h4>Email</h4>
                <p>ecell.djsce@gmail.com</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
