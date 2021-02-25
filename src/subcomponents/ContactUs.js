import React, { Component } from "react";
import { Link } from "react-router-dom";

class Location extends Component {
  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="one wide column"></div>
          <div className="twelve wide column">
            <iframe
              className="menustyle"
              title="location"
              // width="500"
              height="450"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.4447565905969!2d79.53133155805217!3d17.983876648098025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f20fe7740b7%3A0xcad69a0865851062!2sECE%20Department!5e0!3m2!1sen!2sin!4v1600155107056!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="two wide column"></div>
          <div style={{ padding: "0 0 5% 45%" }}>
            <Link to="/contactus" className="ui primary button">
              Contact Us
            </Link>
          </div>

          <div className="one wide column"></div>
        </div>
      </div>
    );
  }
}
export default Location;
