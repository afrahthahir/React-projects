import React from "react";
import Aux from "../../hoc/Auxiliary.js";
import classes from "./Layout.css";

const layout = (props) => (
  <Aux>
    <div>Toolbar, sidedrawer, backdrop</div>
    <div className={classes.Content}>{props.children}</div>
  </Aux>
);

export default layout;
