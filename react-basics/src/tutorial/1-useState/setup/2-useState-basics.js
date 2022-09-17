import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Afrah");

  const clickHandler = () => {
    if (text === "Afrah") {
      return setText("you are beautiful");
    } else {
      return setText("Afrah");
    }
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};
export default UseStateBasics;
