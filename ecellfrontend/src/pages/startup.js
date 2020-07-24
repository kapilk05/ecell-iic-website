import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startups: [],
    };
  }
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
      <div className="container section-holder" id="startup">
        <h1 className="">Startups</h1>
        <div className="row" id="card_display">
          {this.state.startups.map((u) => (
            <div className="col-md-3" id="column_startup">
              <img className="startup_holder" src={u.logo} />
              <p>{u.intro}</p>
              <Link to={u.link} class="peach-text startup_more" />
              Read More
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Startup;
