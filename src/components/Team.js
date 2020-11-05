import React, { Component } from "react";
import Member from "../subcomponents/member";

class Team extends Component {
  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"></i>
          Team
        </h2>
        <div>
          <h2 className="ui center aligned icon header">
            <i className="user icon"></i>
            <div className="content">General Secretary</div>
          </h2>

          <div className="ui link cards">
            <Member
              photo="Manthan Tolia.jpg"
              name="Manthan Tolia"
              description="Manthan is an interior designer living in New York."
              facebook="https://www.facebook.com/manny5252"
              instagram="https://www.instagram.com/manny_525/"
              linkedin="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
              github="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
            />
          </div>
        </div>
        <br />
        <div>
          <h2 className="ui center aligned icon header">
            <i className="user icon"></i>
            <div className="content">Additional Secretary</div>
          </h2>

          <div className="ui link cards">
            <Member
              photo="samarth.jpg"
              name="Samarth Singhal"
              description="Samarth is an interior designer living in New York."
              facebook="https://www.facebook.com/manny5252"
              instagram="https://www.instagram.com/manny_525/"
              linkedin="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
              github="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
            />
            <Member
              photo="Vishav.jpg"
              name="Vishav Kapai"
              description="Vishav is an interior designer living in New York."
              facebook="https://www.facebook.com/manny5252"
              instagram="https://www.instagram.com/manny_525/"
              linkedin="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
              github="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
            />
            <Member
              photo="Mohit Tripathi.jpg"
              name="Mohit Tripathi"
              description="Mohit is an interior designer living in New York."
              facebook="https://www.facebook.com/manny5252"
              instagram="https://www.instagram.com/manny_525/"
              linkedin="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
              github="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
            />
            <Member
              photo="mukul verma.jpg"
              name="Mukul Verma"
              description="Mukul is an interior designer living in New York."
              facebook="https://www.facebook.com/manny5252"
              instagram="https://www.instagram.com/manny_525/"
              linkedin="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
              github="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
            />
          </div>
          <br />
          <div>
            <h2 className="ui center aligned icon header">
              <i className="user icon"></i>
              <div className="content">Joint Secretary</div>
            </h2>
            <div className="ui link cards">
              <Member
                photo="Tanvi Shekhar.jpg"
                name="Tanvi Shekhar"
                description="Tanvi Shekhar is an interior designer living in New York."
                facebook="https://www.facebook.com/manny5252"
                instagram="https://www.instagram.com/manny_525/"
                linkedin="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
                github="https://www.linkedin.com/in/manthan-tolia-8b8587194/"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
