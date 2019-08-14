import * as types from '../actionTypes';
import axios from '../../utils/axiosInstance';

export const getNotesRequest = () => ({ type: types.GET_NOTES_REQUEST });

export const getNotesFailed = payload => ({ type: types.GET_NOTES_FAILED, payload });

export const getNotesSuccessful = payload => ({ type: types.GET_NOTES_SUCCESSFULL, payload });

export const getNotes = () => (dispatch) => {
  dispatch(getNotesRequest());
  return axios.get('/journals')
    .then(res => dispatch(getNotesSuccessful(res.data)))
    .catch(err => dispatch(getNotesFailed(err.response.data)));
};


export const addNoteRequest = payload => ({ type: types.ADD_NOTE_REQUEST, payload });

export const addNoteFailed = payload => ({ type: types.ADD_NOTE_FAILED, payload });

export const addNoteSuccessful = payload => ({ type: types.ADD_NOTE_SUCCESSFULL, payload });

export const addNote = params => (dispatch) => {
  dispatch(addNoteRequest());
  return axios.post('/journals', params)
    .then(res => dispatch(addNoteSuccessful(res.data)))
    .catch(err => dispatch(addNoteFailed(err.response.data)));
};


export const getSingleNoteRequest = payload => ({ type: types.GET_SINGLE_NOTE_REQUEST, payload });

export const getSingleNoteFailed = payload => ({ type: types.GET_SINGLE_NOTE_FAILED, payload });

export const getSingleNoteSuccessful = payload => (
  { type: types.GET_SINGLE_NOTE_SUCCESSFULL, payload });

export const getSingleNote = params => (dispatch) => {
  dispatch(getSingleNoteRequest());
  return axios.post('/journals', params)
    .then(res => dispatch(getSingleNoteSuccessful(res.data)))
    .catch(err => dispatch(getSingleNoteFailed(err.response.data)));
};


export const deleteNoteRequest = payload => ({ type: types.DELETE_NOTE_REQUEST, payload });

export const deleteNoteFailed = payload => ({ type: types.DELETE_NOTE_FAILED, payload });

export const deleteNoteSuccessful = payload => ({ type: types.DELETE_NOTE_SUCCESSFULL, payload });

export const deleteNote = params => (dispatch) => {
  dispatch(deleteNoteRequest());
  return axios.post('/journals', params)
    .then(res => dispatch(deleteNoteSuccessful(res.data)))
    .catch(err => dispatch(deleteNoteFailed(err.response.data)));
};


export const updateNoteRequest = payload => ({ type: types.UPDATE_NOTE_REQUEST, payload });

export const updateNoteFailed = payload => ({ type: types.UPDATE_NOTE_FAILED, payload });

export const updateNoteSuccessful = payload => ({ type: types.UPDATE_NOTE_SUCCESSFULL, payload });

export const updateNote = params => (dispatch) => {
  dispatch(updateNoteRequest());
  return axios.post('/journals', params)
    .then(res => dispatch(updateNoteSuccessful(res.data)))
    .catch(err => dispatch(updateNoteFailed(err.response.data)));
};
