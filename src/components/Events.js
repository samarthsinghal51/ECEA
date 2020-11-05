import React, { Component } from "react";
import EventItem from "../subcomponents/eventItem";

class Events extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="ui two column grid">
          <EventItem photo="apl.jpg" name="Assembly Language Programming" />
          <EventItem photo="bhoomerang1.jpg" name="Bhoomerang" />
          <EventItem photo="apprentice ship.jpg" name="Apprenticeship" />
          <EventItem photo="ece decoded.jpg" name="ece decoded" />
          <EventItem photo="electronova.jpg" name="electronova" />
          <EventItem photo="freshers.jpg" name="freshers" />
          <EventItem photo="gre.jpg" name="GRE" />
          <EventItem photo="inaugral.png" name="Inaugral" />
          <EventItem photo="know your branch.jpg" name="know your branch" />
          <EventItem photo="techexcellence.jpg" name="techexcellence" />
          <EventItem photo="verilog.jpg" name="verilog" />
          <EventItem photo="vocatronics.jpg" name="vocatronics" />
        </div>
      </div>
    );
  }
}
export default Events;
