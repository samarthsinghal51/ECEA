import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Contact Us</div>
        <div className="content">
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="field">
              <label>Email Id</label>
              <input type="text" placeholder="Email Id"></input>
            </div>
            <div className="field">
              <label>Content</label>
              <input type="text" placeholder="Content"></input>
            </div>
            <button class="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
