import React from "react";

const Cards = () => {
  return (
    <div className="ui four column grid" style={{marginTop:30}}>
      <div className="column">
        <div className="ui fluid card" style={{ backgroundColor: "grey" }}>
          <div className="content">
            <div
              className="ui large center aligned header"
              style={{ padding: 0, margin: 0, marginBottom: 4 }}
            >
              <i
                class="calendar alternate outline icon"
                style={{ color: "white" }}
              ></i>
            </div>
            <div
              className="ui huge center aligned header"
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 4,
                color: "white",
              }}
            >
              100+
            </div>
            <div
              className="ui huge center aligned header"
              style={{ padding: 0, margin: 0, color: "white" }}
            >
              Events
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui fluid card" style={{ backgroundColor: "grey" }}>
          <div className="content">
            <div
              className="ui center aligned header"
              style={{ padding: 0, margin: 0, marginBottom: 13 }}
            >
              <i class="users icon" style={{ color: "white" }}></i>
            </div>
            <div
              className="ui huge center aligned header"
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 4,
                color: "white",
              }}
            >
              100+
            </div>
            <div
              className="ui huge center aligned header"
              style={{ padding: 0, margin: 0, color: "white" }}
            >
              Attendees
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui fluid card" style={{ backgroundColor: "grey" }}>
          <div className="content">
            <div className="ui center aligned header">
              <i class="handshake icon" style={{ color: "white" }}></i>
            </div>
            <div
              className="ui huge center aligned header"
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 4,
                color: "white",
              }}
            >
              100+
            </div>
            <div
              className="ui huge center aligned header"
              style={{ padding: 0, margin: 0, color: "white" }}
            >
              Collabrations
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="ui fluid card" style={{ backgroundColor: "grey" }}>
          <div className="content">
            <div className="ui center aligned header">
              <i class="hand pointer icon" style={{ color: "white" }}></i>
            </div>
            <div
              className="ui huge center aligned header"
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 4,
                color: "white",
              }}
            >
              100+
            </div>
            <div
              className="ui huge center aligned header"
              style={{ padding: 0, margin: 0, color: "white" }}
            >
              Social Research
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
