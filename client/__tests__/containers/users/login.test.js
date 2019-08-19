import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Login, { LoginPage } from '../../../containers/users/login';

describe('LoginContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const fakeEvent = {
    target: { name: '', value: '' },
    preventDefault: jest.fn(),
  };

  const props = {
    users: {
      user_data: {
        email: 'email@gmail.com',
        username: 'username',
        token: 'fqgq7f834uegwfiyugh363guyqwfh8wqwfamu8yf134789qufn1463ewqgshuohpve[q93402-9r8971823rqwbf8p9',
      },
      isloggedIn: true,
    },
    loginUser: jest.fn(),
    history: { push: jest.fn() },
  };

  it('should render correctly', () => {
    const LoginContainer = shallow(
      <Provider store={store}>
        <Login {...props} />
      </Provider>,
    );
    expect(LoginContainer).toMatchSnapshot();
  });

  it('should have the following methods', () => {
    const wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper.instance().handleChange(fakeEvent));
    expect(wrapper.instance().handleSubmit(fakeEvent));
  });
});
