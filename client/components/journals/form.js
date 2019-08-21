import React from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({
  formTitle, buttonName, fields: { title, content }, handleChange, handleSubmit,
}) => (

  <section className="padding-top mb-4 container">

    <h4 className="h4-responsive font-weight-bold text-center my-4">{formTitle}</h4>

    <div className="col-md-12 mb-5">
      <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                required
                placeholder="Title"
                onChange={handleChange}
                value={title}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="md-form">
              <textarea
                type="text"
                id="content"
                name="content"
                rows="2"
                className="form-control md-textarea"
                required
                placeholder="Content"
                onChange={handleChange}
                value={content}
              />
            </div>

          </div>
        </div>

        <div className="text-center text-md-left">
          <button type="submit" className="btn btn-primary">{buttonName}</button>
        </div>

      </form>

    </div>

  </section>

);


NoteForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  formTitle: PropTypes.string,
  buttonName: PropTypes.string,
};

NoteForm.defaultProps = {
  formTitle: 'Add Note',
  buttonName: 'Add',
};

export default NoteForm;
