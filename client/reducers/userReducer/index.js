import initialState from '../initialState';
import * as types from '../../actions/actionTypes';


const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case types.UPDATE_LOGIN_STATUS:
      return {
        ...state,
        isloggedIn: true,
        user_data: {
          ...state.user_data, ...action.payload,
        },
      };
    case types.LOGOUT_ACTION:
      return {
        ...state,
        isloggedIn: false,
        user_data: {
          ...state.user_data, email: '', token: '', username: '',
        },
        successMessage: '',
        errorMessage: '',
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isloggedIn: false,
        user_data: {
          ...state.user_data, email: '', token: '', username: '',
        },
        successMessage: '',
        errorMessage: '',
      };
    case types.LOGIN_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        isloggedIn: true,
        user_data: action.payload.data,
        successMessage: action.payload.message,
      };
    case types.LOGIN_FAILED:
      return { ...state, loading: false };
    case types.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case types.SIGNUP_SUCCESSFULL:
      return { ...state, loading: false };
    case types.SIGNUP_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
