import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Home from '../../../components/home';

describe('Provider and Home', () => {
  const home = shallow(<Home />);

  it('renders <Provider/> correctly', () => {
    expect(home).toMatchSnapshot();
  });
});
