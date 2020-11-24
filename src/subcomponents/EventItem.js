import React from "react";
import { useState } from "react";
import { Transition } from "semantic-ui-react";

const EventItem = ({ photo, name }) => {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <Transition visible={visible} animation="pulse" duration={500}>
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img
              alt="event"
              src={`https://drive.google.com/uc?id=${photo}`}
              onMouseEnter={toggleVisibility}
            />
          </div>
          <div className="center aligned content">
            <div className="header">{name}</div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
export default EventItem;
