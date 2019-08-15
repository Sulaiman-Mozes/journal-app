import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Signup from '../../../components/signup';

describe('Provider and Signup', () => {
  const props = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    fields: { email: '', password: '', username: '' },
  };
  const wrapper = shallow(<Signup {...props} />);

  it('renders <Provider/> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
