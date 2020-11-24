import React from "react";
import { useState } from "react";
import { Transition } from "semantic-ui-react";
const Member = ({
  photo,
  name,
  role,
  description,
  facebook,
  instagram,
  linkedin,
  github,
  faculty,
}) => {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <Transition
      visible={visible}
      animation="pulse"
      duration={500}
    >
      <div className="ui raised centered card">
        <div className="image">
          <img
            src={`https://drive.google.com/uc?id=${photo}`}
            alt="special"
            onMouseEnter={toggleVisibility}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          {role != null && (
            <div className="meta">
              <div>{role}</div>
            </div>
          )}
          {description != null && (
            <div className="description">{description}</div>
          )}
        </div>
        <div className="extra content">
          <span>
            {faculty != null && (
              <a href={`https://nitw.irins.org/profile/${faculty}`}>
                <i className="big red id badge icon" />
              </a>
            )}
            {facebook != null && (
              <a href={`https://www.facebook.com/${facebook}`}>
                <i className="big blue facebook f icon" />
              </a>
            )}
            {instagram != null && (
              <a href={`https://www.instagram.com/${instagram}`}>
                <i className="big red instagram icon" />
              </a>
            )}
            {linkedin != null && (
              <a href={`https://www.linkedin.com/in/${linkedin}`}>
                <i className="big blue linkedin in icon" />
              </a>
            )}
            {github != null && (
              <a href={`https://www.github.com/${github}`}>
                <i className="big black github icon" />
              </a>
            )}
          </span>
        </div>
      </div>
    </Transition>
  );
};
export default Member;
