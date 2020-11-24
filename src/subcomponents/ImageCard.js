import "../css/ImageCard.css";
import React from "react";
import { Transition } from "semantic-ui-react";

class ImageCard extends React.Component {
  state = { visible: true };

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height =
      this.imageRef.current != null ? this.imageRef.current.clientHeight : null;
    const spans = Math.ceil(height / 9.8);
    this.setState({ spans });
  };
  render() {
    const { visible } = this.state;
    // const { description, urls } = this.props.image;
    return (
      <Transition visible={visible} animation="pulse" duration={500}>
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img
            ref={this.imageRef}
            alt="gallery"
            src={`https://drive.google.com/uc?id=${this.props.image}`}
            onMouseEnter={this.toggleVisibility}
          />
          {/* <iframe ref={this.imageRef} src={this.props.image}></iframe> */}
        </div>
      </Transition>
    );
  }
}
export default ImageCard;
