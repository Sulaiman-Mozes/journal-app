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
                  <h2>Capture your memories</h2>
                  <h5>
                    Start writing your thoughts and memories
                    and have them synced and backed up in the cloud.
                  </h5>
                  <br />
                  <p>
                    My Journal provides a simple and beautiful interface to capture your
                     thoughts and moments.
                    Use My Journal as a personal journal to track your daily activities,
                     record your travels, people you meet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <br />
          <br />
          <p align="justify">
            Join millions of Journey users and create a healthier, happier mind. A sanctuary
             for your mind and soul, Journey will help increase your positive energy, be more
             grateful and a calmer mind by building healthy thinkings through journaling.
          </p>
          <p align="justify">
            We&apos;re more than just a journal, or a diary; we&apos;re your own motivational coach
             and happiness trainer. Let&apos;s embark on a fabulous journey of self-improvement
              today.
          </p>

        </div>

      </main>

    );
  }
}

export default Home;
