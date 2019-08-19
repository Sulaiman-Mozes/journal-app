import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import UpdateNotePage, { UpdateNote } from '../../../containers/journals/updateNote';

describe('UpdateNotePage Container', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const fakeEvent = {
    target: { name: '', value: '' },
    preventDefault: jest.fn(),
  };

  const props = {
    update: { updateSuccess: 'update success' },
    history: { push: jest.fn() },
    setUpdateSuccessToFalseFunc: jest.fn(),
    getSingleNoteFunc: jest.fn(),
    updateDataFunc: jest.fn(),
    updateNoteFunc: jest.fn(),
    addNoteFunc: jest.fn(),
    match: { params: { id: '64738ewuyifhsjknvue8739' } },
    data: { title: '', content: '' },
  };

  it('should render correctly', () => {
    const updateNoteContainer = shallow(
      <Provider store={store}>
        <UpdateNotePage {...props} />
      </Provider>,
    );
    expect(updateNoteContainer).toMatchSnapshot();
  });

  it('should have the following methods', () => {
    const wrapper = shallow(<UpdateNote {...props} />);
    expect(wrapper.instance().handleChange(fakeEvent));
    expect(wrapper.instance().handleSubmit(fakeEvent));
  });
});
