import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handlesubmit}>
        <div className="form-control">
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
