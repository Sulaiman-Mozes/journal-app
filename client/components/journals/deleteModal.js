import React from 'react';
import PropTypes from 'prop-types';

const DeleteModal = ({ handleDelete }) => (
  <div
    className="modal fade"
    id="modalConfirmDelete"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-sm modal-notify modal-danger" role="document">
      <div className="modal-content text-center">
        <div className="modal-header d-flex justify-content-center">
          <p className="heading">Are you sure?</p>
        </div>

        <div className="modal-body">

          <i className="fas fa-times fa-4x animated rotateIn" />

        </div>

        <div className="modal-footer flex-center">
          <button
            type="button"
            className="btn  btn-outline-danger"
            onClick={handleDelete}
            data-dismiss="modal"
          >
            Yes
          </button>
          <button type="button" className="btn  btn-danger waves-effect" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
);

DeleteModal.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteModal;
