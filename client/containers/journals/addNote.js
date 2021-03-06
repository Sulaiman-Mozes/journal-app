import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addNote } from '../../actions/journals';
import AddNoteForm from '../../components/journals/form';
import { handleError } from '../../utils/toasts';

export class AddNote extends Component {
  state = { fields: { title: '', content: '' } };

  handleChange = (event) => {
    const { name, value } = event.target;
    const { fields } = this.state;
    this.setState({ fields: { ...fields, [name]: value } });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { addNoteFunc } = this.props;
    const { fields: { title, content } } = this.state;
    if (!title.trim() || !content.trim()) {
      handleError('All Feilds are required');
    } else {
      addNoteFunc({ title: title.trim(), content: content.trim() });
      this.setState({ fields: { title: '', content: '' } });
    }
  };

  render() {
    const { fields } = this.state;
    return (
      <AddNoteForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        fields={fields}
      />
    );
  }
}

AddNote.propTypes = {
  addNoteFunc: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  addNoteFunc: addNote,
};

const mapStateToProps = ({ journals: { add } }) => ({ add });

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
