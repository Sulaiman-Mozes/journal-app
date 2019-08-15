/* eslint-disable no-underscore-dangle */
import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

const journalReducer = (state = initialState.journals, action) => {
  switch (action.type) {
    case types.GET_NOTES_REQUEST:
      return { ...state, list: { ...state.list, loading: true, error: '' } };
    case types.GET_NOTES_SUCCESSFULL:
      return {
        ...state,
        list: {
          ...state.list, loading: false, notes: action.payload,
        },
      };
    case types.GET_NOTES_FAILED:
      return { ...state, list: { ...state.list, loading: false, error: action.payload } };
    case types.ADD_NOTE_REQUEST:
      return { ...state, add: { ...state.add, loading: true, error: '' } };
    case types.ADD_NOTE_SUCCESSFULL:
      return {
        ...state,
        add: { ...state.add, loading: false },
        list: { ...state.list, notes: [...state.list.notes, action.payload] },
      };
    case types.ADD_NOTE_FAILED:
      return { ...state, add: { ...state.add, loading: false, error: action.payload } };
    case types.DELETE_NOTE_SUCCESSFULL:
      return {
        ...state,
        list: {
          ...state.list, notes: state.list.notes.filter(note => note._id !== action.payload),
        },
      };
    default:
      return { ...state };
  }
};

export default journalReducer;
