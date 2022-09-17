import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeHandler = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    // return setPeople((oldpeople) => {
    //   const newPeople = people.filter((person) => person.id !== id);
    //   return newPeople;
    // });
    return setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeHandler(id)}>Remove</button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
