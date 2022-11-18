import React from "react";

const Footer = () => {
  return (
    <article className="footer-section">
      <div className="slider_container">
        <input type="range" min="1" max="100" className="seek_slider" />
      </div>

      <div className="footer-content">
        <div className="current-time">
          01:30/
          <div className="total-duration">03:33</div>
          <div className="max">Max</div>
        </div>

        <div>1.0</div>
      </div>
    </article>
  );
};

export default Footer;
