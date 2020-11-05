import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import logo from "../assets/images/ecea1.png";
import "../css/menu.css";
import history from "../history";

class Menu extends Component {
  state = { tab: "ecea" };
  renderActive = (tab) => {
    return this.state.tab === tab ? "active" : "";
  };
  componentDidMount() {
    const routeName = history.location.pathname.substring(1);
    this.setState({ tab: { routeName } });
  }
  render() {
    console.log(this.state.tab);
    return (
      <div className="ui pointing menu" style={{ marginTop: "10px" }}>
        <Link
          to="/"
          className={`${this.renderActive("ecea")} item`}
          onClick={() => this.setState({ tab: "ecea" })}
        >
          <Image src={logo} className="logo" />
        </Link>

        <div className="right menu">
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
