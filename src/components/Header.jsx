import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-book-open" />
      </Link>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink to="/books/HTML" className="nav-li-link">
              HTML
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/books/CSS" className="nav-li-link">
              CSS
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/books/JavaScript" className="nav-li-link">
              JavaScript
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/books/React" className="nav-li-link">
              React
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/books/Node" className="nav-li-link">
              Node
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
