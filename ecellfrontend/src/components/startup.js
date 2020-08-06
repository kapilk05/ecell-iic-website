import React, { Component } from "react";
import "../style.css";
import "../global.css";
import "../hover.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { arrowRight2 } from "react-icons-kit/icomoon/arrowRight2";

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
      <div className="container section-holder" id="startup">
        <h1 className="">Startups</h1>
        <div className="row" id="card_display">
          {this.state.startups.map((u) => (
            <div className="col-md-3" id="column_startup">
              <img className="startup_holder" src={u.logo} />
              <p>{u.intro}</p>
              <Link
                to={u.link}
                className="hvr-icon-forward startup_more"
                style={{ color: "#000" }}
              >
                Read More
                <Icon
                  icon={arrowRight2}
                  style={{ "padding-left": "5px" }}
                  className="hvr-icon peach-text"
                ></Icon>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Startup;
