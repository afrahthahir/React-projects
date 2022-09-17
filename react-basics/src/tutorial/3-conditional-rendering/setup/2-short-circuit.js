import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Peter");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>{text || "hello"}</h2>
      <h2>{text && "hello"}</h2>
    </>
  );
};

export default ShortCircuit;
