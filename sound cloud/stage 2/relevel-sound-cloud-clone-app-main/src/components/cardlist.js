import React from "react";
import playlist from "../playlist.json";
import Card from "./card";

const Cardlist = () => {
  return (
    <section className="cardContainer">
      {playlist.map((item) => {
        return <Card {...item} />;
      })}
    </section>
  );
};

export default Cardlist;
