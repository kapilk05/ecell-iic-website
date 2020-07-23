import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Startups: [],
    };
  }
  getStartupsData() {
    axios
      .get(`http://127.0.0.1:8000/api/startup/`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        <div class="container section-holder" id="startup">
          <h1 class="">Startups</h1>
        </div>;

        const startup = data.map((u) => (
          <div class="row" id="card_display">
            <div class="col-md-3" id="column_startup">
              <img class="startup_holder" src={u.logo} />
              <p>{u.intro}</p>
              <Link to={u.link} class="peach-text startup_more" />
              Read More
            </div>
          </div>
        ));
        this.setState({
          startup,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidMount() {
    this.getStartupsData();
  }
  render() {
    return <div>{this.state.startup}</div>;
  }
}

export default Startup;
