import React from "react";
import { NavLink } from "react-router-dom";

const NavLi = ({ text }) => {
  return (
    <li className="nav-li">
      <NavLink
        to={`/books/${text}`}
        className="nav-li-link"
        activeClassName="nav-li-link-active"
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavLi;
