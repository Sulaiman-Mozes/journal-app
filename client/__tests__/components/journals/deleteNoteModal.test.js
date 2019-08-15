import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import DeleteNoteModal from '../../../components/journals/deleteModal';

describe('Provider and DeleteNoteModal', () => {
  const props = {
    handleDelete: jest.fn(),
  };

  const DeleteNote = shallow(<DeleteNoteModal {...props} />);

  it('renders <Provider/> correctly', () => {
    expect(DeleteNote).toMatchSnapshot();
  });
});
