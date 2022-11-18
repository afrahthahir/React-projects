import React from "react";
import { useRef, useEffect, useState } from "react";
const Header = ({ search }) => {
  const searchValue = useRef(null);

  const handleChange = () => {
    console.log(searchValue.current.value);
    search(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  });
  return (
    <div className="header">
      <header>Relevel Sound Cloud</header>
      <input
        type="text"
        id="name"
        name="search"
        placeholder="Enter Song Name"
        ref={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
