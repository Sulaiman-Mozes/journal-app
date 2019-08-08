import * as types from '../actionTypes';
import axios from '../axiosInstance';

export const signupRequest = () => ({ type: types.SIGNUP_REQUEST });

export const signupFailed = payload => ({ type: types.SIGNUP_FAILED, payload });

export const signupSuccessful = payload => ({ type: types.SIGNUP_SUCCESSFULL, payload });

export const signupUser = params => (dispatch) => {
  dispatch(signupRequest);
  return axios.post('/users/register', params)
    .then(res => dispatch(signupSuccessful(res.data)))
    .catch(err => dispatch(signupFailed(err.response.data)));
};
