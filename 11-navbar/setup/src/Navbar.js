import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import logo from "./logo.svg";
import SideBar from "./SideBar";
import Social from "./Social";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const linkContainerRef = useRef(null);

  useEffect(() => {
    const linkHeights = linkRef.current.getBoundingClientRect().height;
    //console.log(linkHeights);
    if (showLinks) {
      linkContainerRef.current.style.height = `${linkHeights}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkContainerRef}>
          <SideBar linkRef={linkRef} />
        </div>

        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
