import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import LoginComponent from '../../../components/login';


describe('Provider and LoginComponent', () => {
  const props = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    fields: { email: '', password: '' },
  };
  const loginComponent = shallow(<LoginComponent {...props} />);

  it('renders <Provider/> correctly', () => {
    expect(loginComponent).toMatchSnapshot();
  });
});
