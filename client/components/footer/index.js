import React from 'react';


const Footer = () => (

  <footer className="page-footer font-small unique-color-dark pt-4">

    <div className="container">
      <ul className="list-unstyled list-inline text-center py-2">
        <li className="list-inline-item">
          <h5 className="mb-1">Welcome to</h5>
        </li>
        <li className="list-inline-item">
          <button type="button" className="btn btn-outline-white btn-rounded">My Journal</button>
        </li>
      </ul>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2019 Copyright :
      <a href="/"> My Journal</a>
    </div>

  </footer>
);

export default Footer;
