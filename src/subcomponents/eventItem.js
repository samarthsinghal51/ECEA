import React from "react";

const EventItem = ({ photo, name }) => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img src={require(`../assets/events/${photo}`)} />
        </div>
        <div className="center aligned content">
          <a className="header">{name}</a>
        </div>
      </div>
    </div>
  );
};
export default EventItem;
