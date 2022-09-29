import React from "react";
import {
  StyledCards,
  CardSection,
  CardSection1,
  CardSection2,
  Image,
} from "./style/Card.style";
import content from "../Content";
const Card = () => {
  return (
    <StyledCards>
      {content.map((card) => {
        const { id, title, body, image } = card;

        return (
          <CardSection layout={id % 2 === 0 && "row-reverse"}>
            <CardSection1 key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </CardSection1>
            <CardSection2>
              <Image src={`./images/${image}`} alt={title} />
            </CardSection2>
          </CardSection>
        );
      })}
    </StyledCards>
  );
};

export default Card;
