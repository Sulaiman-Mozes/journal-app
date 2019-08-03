import React, { Component } from 'react';

class Journal extends Component {
  componentWillMount() { }

  render() {
    return (
      <div className="container align-center">
        <div className="card-columns">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title that wraps to a new line</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-primary btn-sm">Update</button>
                <button type="button" className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Journal;
