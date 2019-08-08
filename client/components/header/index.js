/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <header>
      <nav className="navbar  fixed-top navbar-expand-lg navbar-dark py-4 indigo">
        <NavLink className="navbar-brand" to="/">My Journal</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>About</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeStyle={activeStyle}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup" activeStyle={activeStyle}>Signup</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  );
};


export default Header;
