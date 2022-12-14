import React from "react";
import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Now:</h3>
      <p>Your delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};
export default orderSummary;
