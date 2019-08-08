import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from '../../../components/footer';

describe('Footer Component', () => {
  const footer = shallow(<Footer />);

  it('renders <Footer/> correctly', () => {
    expect(footer).toMatchSnapshot();
  });
});
