import React from "react";
import { social } from "./data";
const Social = () => {
  return (
    <ul className="social-icons">
      {social.map((icons) => {
        const { id, url, icon } = icons;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
