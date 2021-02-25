import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import { Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Events from "../subcomponents/MainPageEvents";
import Location from "../subcomponents/ContactUs";
import Cards from "./Cards";
import AboutUs from "./AboutUs";
import "../css/menu.css";

class MainPage extends Component {
  render() {
    return (
      <div className="mainpageStyle">
        <Segment attached="bottom">
          <CarouselProvider
            isPlaying
            interval={3000}
            naturalSlideWidth={50}
            naturalSlideHeight={50}
            totalSlides={3}
            naturalSlideHeight={60}
            naturalSlideWidth={100}
          >
            <Slider>
              <Slide tag="a" index={0}>
                <Image src={require("../assets/images/nitw.jpg")} />
              </Slide>
              <Slide tag="a" index={1}>
                <Image src="https://drive.google.com/uc?id=1uvjUpQyxLvK0lRgKianKmJ2wInyYmJrj" />
              </Slide>
              <Slide tag="a" index={2}>
                <Image src="https://drive.google.com/uc?id=19BRRzpnSxSZ1YlLL0LbhNUXn0h-HoXRn" />
              </Slide>
            </Slider>
          </CarouselProvider>
        </Segment>
        <AboutUs
          heading="About Us"
          content=" We concentrate on giving the students of NIT Warangal ample opportunities so that they can work on their knowledge, competencies and widen their field of excellence and grade. We work here for both learning new stuff and also for helping other students to enlarge their parameters of merit and knowledge by the organising a wide variety of events, workshops, lectures, competitions, online quizzes etc."
        />
        <Events />
        {/* <Cards /> */}
        <AboutUs
          heading="Motto"
          content="Diligence, erudition and integrity are words and actions the ECE Association stands for.Right from conducting workshops and webinars, organizing quizzes and games adding the much needed fun to academic rigour, to devoting time to charity work, we strive to leave no stone unturned. Working for the college community has always been our prime and we always strive for the best of everyone."
        />
        <h1 className="ui header" style={{ textAlign: "center" }}>
          Contact Us
        </h1>

        <Location />
      </div>
    );
  }
}
export default MainPage;
