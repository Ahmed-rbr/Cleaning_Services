import React from "react";
import { NavLink } from "react-router-dom";

const LinkIteme = ({ text, to, onClick = undefined }) => {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) => (isActive ? `link bg-bgAccent` : `link`)}
    >
      {text}
    </NavLink>
  );
};

export default LinkIteme;
