import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import HeaderPage from '../../../containers/header';

describe('LoginContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const props = {
    updateLoginData: jest.fn(),
    logoutFunc: jest.fn(),
    users: {
      isloggedIn: true,
      user_data: { username: 'sulaiman' },
    },
  };

  it('should render correctly', () => {
    const HeaderContainer = shallow(
      <Provider store={store}>
        <HeaderPage {...props} />
      </Provider>,
    );
    expect(HeaderContainer).toMatchSnapshot();
  });

  // it('should have the following methods', () => {
  //   const wrapper = shallow(<Header {...props} />);
  //   expect(wrapper.instance().logout());
  // });
});
