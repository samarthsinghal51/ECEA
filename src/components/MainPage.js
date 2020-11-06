import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import { Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Events from "../subcomponents/MainPageEvents";
import Location from "../subcomponents/ContactUs";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Segment attached="bottom">
          <CarouselProvider
            isPlaying
            interval={3000}
            naturalSlideWidth={50}
            naturalSlideHeight={50}
            totalSlides={3}
            naturalSlideHeight={55}
            naturalSlideWidth={100}
          >
            <Slider>
              <Slide tag="a" index={0}>
                <Image src={require("../assets/images/nitw.jpg")} />
              </Slide>
              <Slide tag="a" index={1}>
                <Image src={require("../assets/images/eceadept.jpg")} />
              </Slide>
              <Slide tag="a" index={2}>
                <Image src={require("../assets/images/diamond.png")} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </Segment>
        <Events />

        <h1 className="ui header" style={{ textAlign: "center" }}>
          Contact Us
        </h1>
        <Location />
      </div>
    );
  }
}
export default MainPage;
