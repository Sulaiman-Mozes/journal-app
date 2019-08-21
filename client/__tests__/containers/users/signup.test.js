import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SignUp, { SignupPage } from '../../../containers/users/signup';

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
    registerUser: jest.fn(),
  };

  it('should render correctly', () => {
    const SignupContainer = shallow(
      <Provider store={store}>
        <SignUp {...props} />
      </Provider>,
    );
    expect(SignupContainer).toMatchSnapshot();
  });

  it('should have the following methods', () => {
    const wrapper = shallow(<SignupPage {...props} />);
    expect(wrapper.instance().handleChange(fakeEvent));
    expect(wrapper.instance().handleSubmit(fakeEvent));
  });
});
