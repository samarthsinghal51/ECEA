import React, { useState } from "react";
import Member from "../subcomponents/Member";
import "../css/menu.css";

const Alumni = () => {
  const [alumni] = useState([
    [
      "1M3MtsN2CvKBwWK-Q-2lxvk4UHi6yAzE4",
      "Manthan Tolia",
      "Poster Designer and Content Writer",
      "I am a software enthusiast with a love for game and web development. I have been in ECEA since my first year and have helped a lot to make ECEA what it is today. I love managing and organising events which keeps me busy and away from boredom.",
      "manny5252",
      "manny5252",
      "manthan-tolia-8b8587194",
      "manny525",
    ],
  ]);

  const Alumni = alumni.map((sec) => {
    return (
      <Member
        key={sec[0]}
        photo={sec[0]}
        name={sec[1]}
        role={sec[2]}
        description={sec[3]}
        facebook={sec[4]}
        instagram={sec[5]}
        linkedin={sec[6]}
        github={sec[7]}
      />
    );
  });
  return (
    <div className="mainpageStyle">
      <h2 className="ui center aligned icon header">
        <i className="circular users icon"></i>
        Alumni Connect
      </h2>

      <div className="ui link cards">{Alumni}</div>
    </div>
  );
};
export default Alumni;
