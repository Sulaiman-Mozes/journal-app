/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => (
  <header>
    <nav className="navbar  fixed-top navbar-expand-lg navbar-dark py-4 indigo">
      <a className="navbar-brand" href="#">My Journal</a>
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
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

);


export default Header;
