import React from "react";
import playlist from "../playlist.json";
import Card from "./card";

const Cardlist = ({ term }) => {
  return (
    <section className="cardContainer">
      {playlist
        .filter((song) => song.title.includes(term))
        .map((item, index) => {
          return <Card key={index} {...item} />;
        })}
    </section>
  );
};

export default Cardlist;
