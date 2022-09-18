import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = (props) => {
  const [show, setShow] = useState(false);

  const showQuestion = () => {
    setShow(!show);
  };

  return (
    <div className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={showQuestion}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{show && props.info}</p>
    </div>
  );
};

export default SingleQuestion;
