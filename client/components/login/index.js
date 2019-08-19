/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';


const Login = ({
  handleChange, handleSubmit,
  fields: { email, password },
}) => (
  <div className="padding-top form-container padding-bottom">
    <form
      className="padding-top text-center border border-light p-5"
      onSubmit={handleSubmit}
    >

      <p className="h4 mb-4">Sign in</p>


      <input
        type="email"
        name="email"
        id="defaultLoginFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
        onChange={handleChange}
        value={email}
        required
      />


      <input
        type="password"
        id="defaultLoginFormPassword"
        name="password"
        className="form-control mb-4"
        placeholder="Password"
        onChange={handleChange}
        value={password}
        required
      />

      <div className="d-flex justify-content-around">
        <div>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
            <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me </label>
          </div>
        </div>
        <br />
        <div>
          <a href="/"> &nbsp; Forgot password?</a>
        </div>
      </div>


      <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

      <p>
          Not a member?
        <NavLink to="/signup"> Register</NavLink>
      </p>

    </form>
  </div>
);


Login.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  fields: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
  }).isRequired,
};

export default Login;
