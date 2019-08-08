/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="padding-top form-container padding-bottom">
        <form className="padding-top text-center border border-light p-5" action="#!">

          <p className="h4 mb-4">Sign in</p>


          <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />


          <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

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

          <p>or sign in with:</p>

          <NavLink className="light-blue-text mx-2" to="/signup">
            <i className="fab fa-facebook-f" />
          </NavLink>
          <NavLink className="light-blue-text mx-2" to="/signup">
            <i className="fab fa-twitter" />
          </NavLink>
          <NavLink className="light-blue-text mx-2" to="/signup">
            <i className="fab fa-google" />
          </NavLink>

        </form>
      </div>
    );
  }
}

export default Login;
