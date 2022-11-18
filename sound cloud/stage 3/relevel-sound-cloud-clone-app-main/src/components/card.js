import React from "react";

const Card = ({ artworkUrl, title, user, playback_count, duration }) => {
  return (
    <section className="card">
      <img src={artworkUrl}></img>
      <div className="part-1">
        <p style={{ color: "gray" }}>{user.username}</p>
        <p>{title}</p>
      </div>
      <div className="part-2">
        <p>{duration}</p>
        <p>{playback_count}</p>
      </div>
    </section>
  );
};

export default Card;
