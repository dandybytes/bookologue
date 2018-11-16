import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLi from "./NavLi";

class Header extends Component {
  state = {
    keywords: ["HTML", "CSS", "JavaScript", "React", "Node"]
  };
  render() {
    return (
      <header className="header">
        <Link to="/" className="logo">
          <i className="fas fa-book-open" />
        </Link>
        <nav className="nav">
          <ul className="nav-ul">
            {this.state.keywords.map((kw, i) => (
              <NavLi key={i} text={kw} />
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
