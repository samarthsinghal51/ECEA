import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import MainPage from "./MainPage";
import Team from "./Team";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Events from "./Events";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Menu />
            
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/team" exact component={Team} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/events" exact component={Events} />
              <Route path="/contactus" exact component={ContactUs} />
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
