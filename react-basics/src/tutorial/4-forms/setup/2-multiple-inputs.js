import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", age: "", email: "" });

  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    if (person.firstName && person.age && person.email) {
      e.preventDefault();

      setPeople((people) => {
        return [...people, person];
      });
      setPerson({ firstName: "", age: "", email: "" });
    } else {
      console.log("empty values");
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    return setPerson({
      ...person,
      id: new Date().getTime().toString,
      [name]: value,
    });
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={changeHandler}
            />
          </div>

          <div className="form-control">
            <label htmlFor="firstName">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" onClick={submitHandler}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, age, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
