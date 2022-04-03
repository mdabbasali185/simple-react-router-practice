import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my routing</h1>
      <nav>
        <NavLink className={({isActive})=> isActive?"link-active":"link"} to="/">
          Home
        </NavLink>
        <NavLink className={({isActive})=> isActive?"link-active":"link"} to="/friends">
          Friends
        </NavLink>
        <NavLink className={({isActive})=> isActive?"link-active":"link"} to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
