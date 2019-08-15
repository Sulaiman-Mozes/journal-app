import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteModal from '../../components/journals/deleteModal';
import { deleteNote } from '../../actions/journals';

class DeleteNote extends Component {
  handleDelete = () => {
    const { id, deleteFunc } = this.props;
    deleteFunc(id);
  }

  render() {
    return (
      <DeleteModal handleDelete={this.handleDelete} />
    );
  }
}

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default connect(null, { deleteFunc: deleteNote })(DeleteNote);
