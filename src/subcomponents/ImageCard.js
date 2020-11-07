import "../css/ImageCard.css";
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 9.8);
    this.setState({ spans });
  };
  render() {
    // const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt="gallery"
          src={`https://drive.google.com/uc?id=${this.props.image}`}
        />
        {/* <iframe ref={this.imageRef} src={this.props.image}></iframe> */}
      </div>
    );
  }
}
export default ImageCard;
