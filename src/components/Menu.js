import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import "../css/menu.css";

class Menu extends Component {
  state = { tab: "ecea" };
  renderActive = (tab) => {
    return this.state.tab === tab ? "active" : "";
  };
  // componentDidMount() {
  //   const routeName = history.location.pathname.substring(1);
  //   this.setState({ tab: { routeName } });
  // }
  render() {
    console.log(this.state.tab);
    return (
      <div className="ui menu" style={{ marginTop: "10px" }}>
        <div className="ui color1">
          <Link
            to="/"
            className={`${this.renderActive("ecea")} item`}
            onClick={() => this.setState({ tab: "ecea" })}
          >
            <Image
              src={require("../assets/images/ecea1.png")}
              className="logo"
            />
          </Link>
        </div>

        <div className="ui pointing right menu">
          <Link
            to="/team"
            className={`${this.renderActive("team")} item`}
            onClick={() => this.setState({ tab: "team" })}
          >
            Team
          </Link>
          <Link
            to="/gallery"
            className={`${this.renderActive("gallery")} item`}
            onClick={() => this.setState({ tab: "gallery" })}
          >
            Gallery
          </Link>
          <Link
            to="/events"
            className={`${this.renderActive("events")} item`}
            onClick={() => this.setState({ tab: "events" })}
          >
            Events
          </Link>
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
