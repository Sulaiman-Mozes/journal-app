/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../../assets/css/home.scss';

class Home extends Component {
  render() {
    return (

      <main className="text-center py-5">

        <div className="view intro-2 home">
          <div className="full-bg-img">
            <div className="mask rgba-black-light flex-center">
              <div className="container text-center white-text">
                <div className="white-text text-center wow ">
                  <h2>This Navbar is fixed</h2>
                  <h5>It will always stay visible on the top, even when you scroll down</h5>
                  <br />
                  <p>
                    Full page intro with background image will be always displayed in
                    full screen mode, regardless of device
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12">

              <p align="justify">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
          </div>
        </div>

      </main>

    );
  }
}

export default Home;
