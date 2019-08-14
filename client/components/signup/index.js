/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';
import '../../assets/css/form.scss';
import { NavLink } from 'react-router-dom';


const SignUp = ({
  handleChange, handleSubmit,
  fields: { email, password, username },
}) => (
  <div className="padding-top form-container padding-bottom">
    <form
      className=" padding-top text-center border border-light p-5"
      onSubmit={handleSubmit}
    >

      <p className="h4 mb-4">Sign up</p>

      <input
        type="text"
        name="username"
        id="defaultRegisterFormUsername"
        className="form-control mb-4"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        id="defaultRegisterFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
        value={email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        id="defaultRegisterFormPassword"
        className="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
        value={password}
        onChange={handleChange}
        required
      />

      <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
          At least 8 characters and 1 digit
      </small>

      <button className="btn btn-info my-4 btn-block" type="submit">Sign up</button>

      <p>or sign up with:</p>
      <NavLink className="light-blue-text mx-2" to="/signup">
        <i className="fab fa-facebook-f" />
      </NavLink>
      <NavLink className="light-blue-text mx-2" to="/signup">
        <i className="fab fa-twitter" />
      </NavLink>
      <NavLink className="light-blue-text mx-2" to="/signup">
        <i className="fab fa-google" />
      </NavLink>
      <hr />

      <p>
          By clicking
        <em> Sign up </em>
          you agree to our
        <NavLink to="/" target="_blank"> terms of service</NavLink>
      </p>

    </form>
  </div>
);

SignUp.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  fields: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
  }).isRequired,
};

export default SignUp;
