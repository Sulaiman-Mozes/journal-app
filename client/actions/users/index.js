import * as types from '../actionTypes';
import axios, { setAuthToken } from '../../utils/axiosInstance';
import { handleError, handleSuccess } from '../../utils/toasts';


export const signupRequest = () => ({ type: types.SIGNUP_REQUEST });

export const signupFailed = payload => ({ type: types.SIGNUP_FAILED, payload });

export const signupSuccessful = payload => ({ type: types.SIGNUP_SUCCESSFULL, payload });

export const signupUser = params => (dispatch) => {
  dispatch(signupRequest);
  return axios.post('/users/register', params)
    .then((res) => {
      handleSuccess('Signup Sucessful');
      dispatch(signupSuccessful(res.data));
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : 'Network Error, Try Again Later';
      handleError(message);
      dispatch(signupFailed(message));
    });
};


export const loginRequest = () => ({ type: types.LOGIN_REQUEST });

export const loginFailed = payload => ({ type: types.LOGIN_FAILED, payload });

export const loginSuccessful = payload => ({ type: types.LOGIN_SUCCESSFULL, payload });

export const userLogin = params => (dispatch) => {
  dispatch(loginRequest);
  return axios.post('/users/login', params)
    .then((res) => {
      handleSuccess('Login Sucessful');
      setAuthToken(res.data.data.token);
      dispatch(loginSuccessful(res.data));
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : 'Network Error, Try Again Later';
      handleError(message);
      dispatch(loginFailed(message));
    });
};


export const logoutAction = () => ({ type: types.LOGOUT_ACTION });

export const updateLoginStatus = payload => ({ type: types.UPDATE_LOGIN_STATUS, payload });
