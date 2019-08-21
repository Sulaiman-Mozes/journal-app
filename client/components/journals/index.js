/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { NavLink } from 'react-router-dom';

const JournalItems = ({ notes, handleDelete }) => (
  <div className="container align-center">
    <div className="card-columns">
      {
        notes.map(note => (

          <div key={note._id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.content}</p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated
                  {' '}
                  {Moment().diff(note.updatedAt, 'days')
                    ? `${Moment().diff(note.updatedAt, 'days')} day(s)`
                    : (Moment().diff(note.updatedAt, 'minutes') < 60
                      ? `${Moment().diff(note.updatedAt, 'minutes')} minute(s)`
                      : `${Moment().diff(note.updatedAt, 'hours')} hour(s)`
                    )
                  }
                  {' '}
                  ago
                </small>

              </p>
              <div className="d-flex justify-content-around">

                <NavLink to={`/update/${note._id}`}>
                  <button type="button" className="btn btn-primary btn-sm">Update</button>
                </NavLink>

                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#modalConfirmDelete"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>

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
  handleDelete: PropTypes.func.isRequired,
};

export default JournalItems;
