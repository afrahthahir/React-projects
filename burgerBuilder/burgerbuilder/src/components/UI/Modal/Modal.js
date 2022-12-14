import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} onClick={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        tranform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);
export default modal;
