import UserReducer from '../../reducers/userReducer';
import initialState from '../../reducers/initialState';
import * as userActions from '../../actions/users';


describe('Test User Reducer', () => {
  const state = initialState.users;

  test('LOGIN_FAILED action', () => {
    expect(UserReducer(state,
      userActions.loginFailed()))
      .toEqual({ ...state, loading: false });
  });

  test('SIGNUP_REQUEST action', () => {
    expect(UserReducer(state,
      userActions.signupRequest()))
      .toEqual({ ...state, loading: true });
  });

  test('SIGNUP_SUCCESSFULL action', () => {
    expect(UserReducer(state,
      userActions.signupSuccessful()))
      .toEqual({ ...state, loading: false });
  });

  test('SIGNUP_FAILED action', () => {
    expect(UserReducer(state,
      userActions.signupFailed()))
      .toEqual({ ...state, loading: false });
  });

  test('UPDATE_LOGIN_STATUS action', () => {
    expect(UserReducer(state,
      userActions.updateLoginStatus({})))
      .toEqual({
        ...state,
        isloggedIn: true,
        user_data: { ...state.user_data },
      });
  });

  test('LOGOUT_ACTION action', () => {
    expect(UserReducer(state,
      userActions.logoutAction()))
      .toEqual({
        ...state,
        isloggedIn: false,
        user_data: {
          ...state.user_data, email: '', token: '', username: '',
        },
        successMessage: '',
        errorMessage: '',
      });
  });

  test('LOGIN_REQUEST action', () => {
    expect(UserReducer(state,
      userActions.loginRequest()))
      .toEqual({
        ...state,
        isloggedIn: false,
        loading: true,
        user_data: {
          ...state.user_data, email: '', token: '', username: '',
        },
        successMessage: '',
        errorMessage: '',
      });
  });

  test('LOGIN_SUCCESSFULL action', () => {
    expect(UserReducer(state,
      userActions.loginSuccessful({ data: {}, message: '' })))
      .toEqual({
        ...state,
        loading: false,
        isloggedIn: true,
        user_data: {},
        successMessage: '',
      });
  });

  test('When no action is passed', () => {
    expect(UserReducer(state,
      { action: { type: '' } }))
      .toEqual({ ...state });
  });
});
