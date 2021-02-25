import React, { useState } from "react";
import EventItem from "../subcomponents/EventItem";
import "../css/menu.css";

const Events = () => {
  const [images] = useState([
    ["12lH82_sXt_hBgK4KtTKxBrXSi2W3_P16", "Alumnicate"],
    ["1kBRtsSk346sNWjqNjkjhUaJE-QP1CT7Y", "TechFlix"],
    ["1hIpJ65SZM_t1QCwEcAaL1HVsCdodGAE8", "Battle of Memes"],
    ["1yuZpQmxMSHRVSMzXVzdcGFHwW5grNleM", "Online Quiz"],
    ["13D8FO08ypIV5yVpe6rFKIBrbWParMVC_", "Happy Diwali"],
    ["1zfgBKoZFYaT9hmXjCEQ4xqRFXrqHS81T", "Happy Dussehra"],
    ["1SJdfDkj-Yy3nLPw45S6NHTl0QKX4pMYC", "Engineer's Day"],
    ["1UjxOV7TSk4kSMMofNmxjhxoX3O8VtYpQ", "Internship & Placement Experience"],
    ["1pGCTSGZJ8XKqhq7qxPk04HEw7l_f488M", "CodeQuest"],
    ["1rxWiLxrVdYDJBXdYXgwr0xDPUsR6SrCr", "Gandhi Jayanti"],
    ["1pouVUVaYwu9l3OpddJAfg_AHOMIrdhYh", "Gate Talk"],
    ["1XV1q7WnTE4X6usqTIEJvpcR7lUpumddE", "Ideathon"],
    ["1P3u9s08vCRXwaGjA5dBt7SiodIcnLLuf", "Cognizance"],
    ["17wZSwRW-IhEivjJWMCKm43RWs13dIGQH", "Know Your Branch"],
    ["1BwowvfQHHXxHvETzn2dpvv5naBTKUF8e", "Sci-Tech Quiz"],
    ["1HI0iUQsu-EuTWu-JRyrgI51LfJ5QmjOs", "Online Treasure Quiz"],
    ["1XRA-bz7BRY3wxTY4BDczKKmR6yS5SNMd", "UI/UX Workshop"],
    ["1WwXj6T4csnp5gNF6KP7-NU2RKcnl9dLk", "Ece-Decoded"],
    ["1tjozNvLcu_jzMNKJjRznfOb9j9wP7hVX", "Valorant"],
  ]);
  const photos = images.map((image) => {
    return <EventItem photo={image[0]} name={image[1]} />;
  });
  return (
    <div className="mainpageStyle">
      <div className="ui two column grid">{photos}</div>
    </div>
  );
};

export default Events;
