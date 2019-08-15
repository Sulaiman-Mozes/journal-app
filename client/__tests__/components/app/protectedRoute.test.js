import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProtectedRoutes from '../../../components/app/protectRoute';

describe('Provider and ProtectedRoutes', () => {
  const protectedRoutes = shallow(<ProtectedRoutes component={jest.fn()} />);

  it('renders <Provider/> correctly', () => {
    expect(protectedRoutes).toMatchSnapshot();
  });
});
