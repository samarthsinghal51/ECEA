import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import { Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Events from "../subcomponents/MainPageEvents";
import Location from "../subcomponents/ContactUs";
import { Transition } from "semantic-ui-react";

class MainPage extends Component {
  state = { visible: true };

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;
    return (
      <div>
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
                <Transition visible={visible} animation="pulse" duration={500}>
                  <Image src={require("../assets/images/nitw.jpg")} onMouseEnter={this.toggleVisibility}/>
                </Transition>
              </Slide>
              <Slide tag="a" index={1}>
                <Transition visible={visible} animation="pulse" duration={500}>
                  <Image src="https://drive.google.com/uc?id=1uvjUpQyxLvK0lRgKianKmJ2wInyYmJrj" onMouseEnter={this.toggleVisibility}/>
                </Transition>
              </Slide>
              <Slide tag="a" index={2}>
                <Transition visible={visible} animation="pulse" duration={500}>
                  <Image src="https://drive.google.com/uc?id=19BRRzpnSxSZ1YlLL0LbhNUXn0h-HoXRn" onMouseEnter={this.toggleVisibility}/>
                </Transition>
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
