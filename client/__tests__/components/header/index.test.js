import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../../../components/header';

describe('Header Component', () => {
  const header = shallow(<Header />);

  it('renders <Header/> correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
