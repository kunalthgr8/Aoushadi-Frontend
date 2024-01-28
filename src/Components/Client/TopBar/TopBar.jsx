import React, { useState, useEffect } from "react";
import Account from "../../../Assets/Account.svg";
import "./TopBar.css";
import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";
// import Example from "./Menu/Menu";

const TopBar = ({ username }) => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isUserActive = location.pathname === "/user";

  return (
    <>
      <div className={windowWidth < 761 ? "topbar" : "TopBar"}>
        {windowWidth < 761 && <div>Hello </div>}
        {!isUserActive && (
          <div className="Image-TopBar">
            <NavLink to="/user">
              <img src={Account} alt="Account" />
            </NavLink>
            <p>{username}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TopBar;
