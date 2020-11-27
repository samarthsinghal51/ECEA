import React from "react";

const AboutUs = ({ heading, content }) => {
  return (
    <div
      className="ui centered fluid card"
      style={{ marginTop: 30, paddingTop: 10, marginBottom: 30 }}
    >
      <h1 className="ui center aligned header">{heading}</h1>
      <h3
        className="ui center aligned header"
        style={{ marginTop: 4, marginBottom: 20 }}
      >
        {content}
      </h3>
    </div>
  );
};
export default AboutUs;
