import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpdateNoteForm from '../../components/journals/form';
import {
  getSingleNote, updateData, updateNote, setUpdateSuccessToFalse,
} from '../../actions/journals';
import { handleError } from '../../utils/toasts';

export class UpdateNote extends Component {
  static getDerivedStateFromProps(props) {
    const {
      update: { updateSuccess }, history,
      setUpdateSuccessToFalseFunc,
    } = props;

    if (updateSuccess) {
      history.push('/dashboard');
      setUpdateSuccessToFalseFunc();
    }
    return null;
  }

  state = {};

  componentDidMount() {
    const {
      match: { params: { id } }, getSingleNoteFunc,
    } = this.props;
    getSingleNoteFunc(id);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { data, updateDataFunc } = this.props;
    updateDataFunc({ ...data, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { data: { title, content, _id }, updateNoteFunc } = this.props;
    if (!title.trim() || !content.trim()) {
      handleError('All Feilds are required');
    } else {
      updateNoteFunc({ title: title.trim(), content: content.trim(), _id });
    }
  };


  render() {
    const { data } = this.props;
    return (
      <div style={{ paddingBottom: '8rem' }}>
        <UpdateNoteForm
          formTitle="Update Note"
          buttonName="UPDATE"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          fields={data}
        />
      </div>
    );
  }
}

UpdateNote.propTypes = {
  getSingleNoteFunc: PropTypes.func.isRequired,
  updateDataFunc: PropTypes.func.isRequired,
  updateNoteFunc: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    _id: PropTypes.string,

  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  getSingleNoteFunc: getSingleNote,
  updateDataFunc: updateData,
  updateNoteFunc: updateNote,
  setUpdateSuccessToFalseFunc: setUpdateSuccessToFalse,
};

const mapStateToProps = ({ journals }) => ({
  data: journals.data,
  update: journals.update,
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);
