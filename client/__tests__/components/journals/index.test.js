import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import JournalItems from '../../../components/journals';

describe('Provider and JournalItems', () => {
  const props = {
    handleDelete: jest.fn(),
    notes: [{ _id: 'q26738wueyihg98', title: 'title', content: 'content' }],
  };

  const journalItems = shallow(<JournalItems {...props} />);

  it('renders <Provider/> correctly', () => {
    expect(journalItems).toMatchSnapshot();
  });
});
