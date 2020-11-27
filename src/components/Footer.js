import React, { Component } from "react";
import "../css/menu.css";
import ScrollToTop from "./ScrollToTop";

class Footer extends Component {
  render() {
    return (
        <div className="ui bottom fixed menu" style={{ paddingTop:0, position: "fixed", zIndex:1 ,width:8,marginLeft:1341,border:"none"}}>
          <div className="ui pointing right menu" style={{border:"none" ,zIndex:-1}}>
            <ScrollToTop/>
          </div>
        </div>
    );
  }
}
export default Footer;
