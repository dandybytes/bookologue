import React from "react";
import { NavLink } from "react-router-dom";

const NavLi = ({ text }) => {
  return (
    <li className="nav-li">
      <NavLink
        to={`/books/${text}`}
        className="nav-li-link"
        // activeStyle={{ backgroundColor: "rgba(50, 50, 50, 0.2)" }}
        activeClassName="nav-li-link-active"
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavLi;
