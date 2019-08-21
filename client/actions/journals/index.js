import * as types from '../actionTypes';
import axios from '../../utils/axiosInstance';
import { handleError, handleSuccess } from '../../utils/toasts';

export const getNotesRequest = () => ({ type: types.GET_NOTES_REQUEST });

export const getNotesFailed = payload => ({ type: types.GET_NOTES_FAILED, payload });

export const getNotesSuccessful = payload => ({ type: types.GET_NOTES_SUCCESSFULL, payload });

export const getNotes = () => (dispatch) => {
  dispatch(getNotesRequest());
  return axios.get('/api/journals')
    .then(res => dispatch(getNotesSuccessful(res.data)))
    .catch(err => dispatch(getNotesFailed(err.response.data)));
};


export const addNoteRequest = payload => ({ type: types.ADD_NOTE_REQUEST, payload });

export const addNoteFailed = payload => ({ type: types.ADD_NOTE_FAILED, payload });

export const addNoteSuccessful = payload => ({ type: types.ADD_NOTE_SUCCESSFULL, payload });

export const addNote = params => (dispatch) => {
  dispatch(addNoteRequest());
  return axios.post('/api/journals', params)
    .then((res) => {
      handleSuccess('Note Successfully Added');
      dispatch(addNoteSuccessful(res.data));
    })
    .catch((err) => {
      handleError('Failed To Add Note');
      dispatch(addNoteFailed(err.response.data));
    });
};


export const deleteNoteRequest = payload => ({ type: types.DELETE_NOTE_REQUEST, payload });

export const deleteNoteFailed = payload => ({ type: types.DELETE_NOTE_FAILED, payload });

export const deleteNoteSuccessful = payload => ({ type: types.DELETE_NOTE_SUCCESSFULL, payload });

export const deleteNote = id => (dispatch) => {
  dispatch(deleteNoteRequest());
  return axios.delete(`/api/journals/${id}`)
    .then(() => {
      handleSuccess('Note Successfully Deleted');
      dispatch(deleteNoteSuccessful(id));
    })
    .catch((err) => {
      handleError('Failed To Delete Note');
      dispatch(deleteNoteFailed(err));
    });
};


export const updateData = payload => ({ type: types.UPDATE_DATA, payload });

export const setUpdateSuccessToFalse = () => ({ type: types.SET_UPDATE_SUCCEESS_TO_FALSE });

export const updateNoteRequest = payload => ({ type: types.UPDATE_NOTE_REQUEST, payload });

export const updateNoteFailed = payload => ({ type: types.UPDATE_NOTE_FAILED, payload });

export const updateNoteSuccessful = payload => ({ type: types.UPDATE_NOTE_SUCCESSFULL, payload });

export const updateNote = params => (dispatch) => {
  dispatch(updateNoteRequest());
  // eslint-disable-next-line no-underscore-dangle
  return axios.put(`/api/journals/${params._id}`, params)
    .then((res) => {
      handleSuccess('Note Successfully Updated');
      dispatch(updateNoteSuccessful(res.data));
    })
    .catch((err) => {
      handleError('Failed To Update Note');
      dispatch(updateNoteFailed(err.response.data));
    });
};


export const getSingleNoteRequest = payload => ({ type: types.GET_SINGLE_NOTE_REQUEST, payload });

export const getSingleNoteFailed = payload => ({ type: types.GET_SINGLE_NOTE_FAILED, payload });

export const getSingleNoteSuccessful = payload => (
  { type: types.GET_SINGLE_NOTE_SUCCESSFULL, payload });

export const getSingleNote = id => (dispatch) => {
  dispatch(getSingleNoteRequest());
  return axios.get(`/api/journals/${id}`)
    .then((res) => {
      dispatch(updateData(res.data));
      dispatch(getSingleNoteSuccessful(res.data));
    })
    .catch(err => dispatch(getSingleNoteFailed(err.response.data)));
};
