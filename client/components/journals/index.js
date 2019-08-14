/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const JournalItems = ({ notes }) => (
  <div className="container align-center">
    <div className="card-columns">
      {
        notes.map(note => (

          <div key={note._id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.content}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-primary btn-sm">Update</button>
                <button type="button" className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>

          </div>

        ))
      }
    </div>
  </div>
);

JournalItems.propTypes = {
  notes: PropTypes.arrayOf(Object).isRequired,
};

export default JournalItems;
