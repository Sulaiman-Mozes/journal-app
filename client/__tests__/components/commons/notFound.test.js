import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import NotFound from '../../../components/commons/notFound';

describe('Provider and NotFound', () => {
  const notFound = shallow(<NotFound />);

  it('renders <Provider/> correctly', () => {
    expect(notFound).toMatchSnapshot();
  });
});
