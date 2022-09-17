import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "john",
    age: 24,
    message: "hello beautiful",
  });

  const changeHandler = () => {
    if (person.message === "hello beautiful") {
      setPerson({ ...person, message: "hello ugly" });
    } else {
      setPerson({ ...person, message: "hello beautiful" });
    }
  };

  return (
    <>
      <div>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <h3>{person.message}</h3>
        <button className="btn" onClick={changeHandler}>
          Click me
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
