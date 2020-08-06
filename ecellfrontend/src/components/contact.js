import React, { Component, Fragment } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fha3NoaXNoYWgiLCJhIjoiY2tjMzBhd2p2MjI1NjJybmFlazh6Y2RudCJ9.MhchJI1OMSvcS4v_N354FQ";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 72.837424,
      lat: 19.108731,
      zoom: 12.5,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.scrollZoom.disable();
    var marker = new mapboxgl.Marker()
      .setLngLat([72.837424, 19.108731])
      .addTo(map);
  }
  render() {
    return (
      <div className="container-contact">
        <h1 className="" style={{ "text-align": "center" }}>
          Contact Us
        </h1>
        <div className="row map">
          <div className="col-md-6 col-sm-12 map">
            <div>
              <div ref={(el) => (this.mapContainer = el)} id="map" />
            </div>
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
                  style={{
                    "margin-top": "30px",
                    "margin-bottom": "30px",
                  }}
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
