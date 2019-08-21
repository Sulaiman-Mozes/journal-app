/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import JournalList from '../../components/journals';
import AddNote from './addNote';
import DeleteNote from './deleteNote';
import { getNotes } from '../../actions/journals';
import Loader from '../../components/commons/loader';
import NotFound from '../../components/commons/notFound';


export class Journals extends Component {
  state = { deleteId: '' }

  componentDidMount() {
    const { getAllNotes } = this.props;
    getAllNotes();
  }

  handleDelete = (id) => {
    this.setState({ deleteId: id });
  };

  render() {
    const { list: { notes, loading } } = this.props;
    const { deleteId } = this.state;
    return (
      <div>

        <AddNote />
        <DeleteNote id={deleteId} />
        {
          loading ? <Loader />
            : (
              notes.length > 0
                ? (<JournalList notes={notes} handleDelete={this.handleDelete} />)
                : (
                  <NotFound
                    title="No Results"
                    text="You Don't Have Any Notes, please add notes"
                  />
                )
            )
        }
      </div>
    );
  }
}

Journals.propTypes = {
  getAllNotes: propTypes.func.isRequired,
  list: propTypes.shape({
    notes: propTypes.arrayOf(Object).isRequired,
    loading: propTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ journals: { list } }) => ({ list });
const mapDispatchToProps = { getAllNotes: getNotes };

export default connect(mapStateToProps, mapDispatchToProps)(Journals);
