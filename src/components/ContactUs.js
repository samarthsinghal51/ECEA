import React, { Component } from "react";
import Modal from "./Modal";
import history from "../history";

class ContactUs extends Component {
  render() {
    return <Modal onDismiss={() => history.push("/")} />;
  }
}
export default ContactUs;
