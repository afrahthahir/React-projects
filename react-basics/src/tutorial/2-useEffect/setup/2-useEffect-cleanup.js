import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("hello world");
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
      console.log("cleanup");
    };
  });

  return (
    <>
      <h2>Window width</h2>
      <h3>{size}PX</h3>
    </>
  );
};

export default UseEffectCleanup;
