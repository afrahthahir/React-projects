import React from "react";
import { links } from "./data";

const SideBar = ({ linkRef }) => {
  return (
    <ul className="links" ref={linkRef}>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
