import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import AddNoteForm from '../../../components/journals/form';

describe('Provider and AddNoteForm', () => {
  const props = {
    fields: { title: '', content: '' },
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  };

  const NoteForm = shallow(<AddNoteForm {...props} />);

  it('renders <Provider/> correctly', () => {
    expect(NoteForm).toMatchSnapshot();
  });
});
