import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import { Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import image from "../assets/images/nitw.jpg";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Segment attached="bottom">
          <CarouselProvider
            isPlaying
            interval={4000}
            naturalSlideWidth={50}
            naturalSlideHeight={50}
            totalSlides={3}
          >
            <Slider>
              <Slide tag="a" index={0}>
                <Image src={image} />
              </Slide>
              <Slide tag="a" index={1}>
                <Image src="https://lorempixel.com/800/800/cats/1" />
              </Slide>
              <Slide tag="a" index={2}>
                <Image src="https://lorempixel.com/800/800/cats/2" />
              </Slide>
            </Slider>
          </CarouselProvider>
        </Segment>
        <div className="ui grid">
          <div className="one wide column"></div>
          <div className="six wide column">
            <table className="ui table">
              <thead>
                <tr className="center aligned">
                  <th>Upcoming Events</th>
                </tr>
              </thead>
              <tbody>
                <tr className="center aligned">
                  <td>Know Your Branch</td>
                </tr>
                <tr className="center aligned">
                  <td>Ece Decoded</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="two wide column"></div>
          <div
            className="six wide column"
            style={{
              alignItems: "center",
              borderColor: "black",
              borderWidth: 3,
            }}
          >
            <table className="ui table">
              <thead>
                <tr className="center aligned">
                  <th>Past Events</th>
                </tr>
              </thead>
              <tbody>
                <tr className="center aligned">
                  <td>Electrona</td>
                </tr>
                <tr className="center aligned">
                  <td>Alumnicate</td>
                </tr>
                <tr className="center aligned">
                  <td>Online Quiz</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="one wide column"></div>
        </div>

        <h1 className="ui header" style={{ textAlign: "center" }}>
          Contact Us
        </h1>
        <div className="ui grid">
          <div className="one wide column"></div>
          <div className="six wide column">
            <iframe
              width="500"
              height="450"
              frameborder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.4447565905969!2d79.53133155805217!3d17.983876648098025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f20fe7740b7%3A0xcad69a0865851062!2sECE%20Department!5e0!3m2!1sen!2sin!4v1600155107056!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="two wide column"></div>
          <div className="six wide column" style={{ textAlign: "center" }}>
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
export default MainPage;
