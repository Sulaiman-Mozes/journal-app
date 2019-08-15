import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Loader from '../../../components/commons/loader';

describe('Provider and Loader', () => {
  const loader = shallow(<Loader />);

  it('renders <Provider/> correctly', () => {
    expect(loader).toMatchSnapshot();
  });
});
