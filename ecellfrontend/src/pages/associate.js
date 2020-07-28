import React, { Component, Fragment } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Associate from "../images/partners-header.png";

export class Partner extends Component {
  render() {
    return (
      <Fragment>
        <div className="partners container section-holder">
          <h1 className="blue-text">Join the DJSCE Ecell Partner Program</h1>
          <p>
            At E-cell we provide a wide range of partners the opportunity to
            achieve their individual goals. Our global partner program enables
            content, solution, and reseller partners to extend their reach.
          </p>
          <a href="#" className="btn">
            Become a Partner
          </a>
        </div>
        <img
          src={Associate}
          style={{
            position: "relative",
            width: "100vw",
            bottom: "9em",
            "min- width": "1080px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          alt=""
        />
      </Fragment>
    );
  }
}
export default Partner;
