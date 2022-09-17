import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
      //setValue(value + 1);
    }, 2000);
  };

  return (
    <>
      <div>
        <h4 style={{ fontSize: "50px" }}>Regular Counter</h4>
        <h2>{value}</h2>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;
