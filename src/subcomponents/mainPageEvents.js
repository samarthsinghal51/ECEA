import React, { Component } from "react";

class Events extends Component {
  state = {
    past_events: ["Know Your Branch", "Ece Decoded"],
    upcoming_events: ["Electrona", "Alumnicate", "Online Quiz"],
  };
  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="one wide column"></div>
          <div className="six wide column">
            <table className="ui table">
              <thead>
                <tr className="center aligned">
                  <th>Upcoming Events</th>
                </tr>
              </thead>
              <tbody>
                {this.state.past_events.map((event) => {
                  return (
                    <tr className="center aligned" key={event}>
                      <td>{event}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="two wide column"></div>
          <div className="six wide column">
            <table className="ui table">
              <thead>
                <tr className="center aligned">
                  <th>Past Events</th>
                </tr>
              </thead>
              <tbody>
                {this.state.upcoming_events.map((event) => {
                  return (
                    <tr className="center aligned" key={event}>
                      <td>{event}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="one wide column"></div>
        </div>
      </div>
    );
  }
}
export default Events;
