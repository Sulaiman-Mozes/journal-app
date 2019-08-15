import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../../../components/header';

describe('Header Component', () => {
  const props = {
    isloggedIn: true,
    logout: jest.fn(),
    username: 'sulaiman_mozes',
  };
  const header = shallow(<Header {...props} />);
  const headerNotLoggedIn = shallow(<Header {...props} isloggedIn={false} />);

  it('renders <Header/> correctly', () => {
    expect(header).toMatchSnapshot();
    expect(headerNotLoggedIn).toMatchSnapshot();
  });
});
