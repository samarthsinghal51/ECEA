import React from "react";

const Member = ({
  photo,
  name,
  description,
  facebook,
  instagram,
  linkedin,
  github,
}) => {
  return (
    <div className="ui raised centered card">
      <div className="image">
        <img src={require(`../assets/team/${photo}`)} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">
          <a>Friends</a>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">Joined in 2013</span>
        <span>
          <a href={facebook}>
            <i className="big blue facebook f icon" />
          </a>
          <a href={instagram}>
            <i className="big red instagram icon" />
          </a>
          <a href={linkedin}>
            <i className="big blue linkedin in icon" />
          </a>
          <a href={github}>
            <i className="big black github icon" />
          </a>
        </span>
      </div>
    </div>
  );
};
export default Member;
