import React from "react";

const EventItem = ({ photo, name }) => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img alt="event" src={require(`../assets/events/${photo}`)} />
        </div>
        <div className="center aligned content">
          <div className="header">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default EventItem;
