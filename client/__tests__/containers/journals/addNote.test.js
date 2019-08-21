import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AddNotePage, { AddNote } from '../../../containers/journals/addNote';

describe('AddNoteContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const fakeEvent = {
    target: { name: '', value: '' },
    preventDefault: jest.fn(),
  };

  const props = {
    addNoteFunc: jest.fn(),
  };

  it('should render correctly', () => {
    const addNoteContainer = shallow(
      <Provider store={store}>
        <AddNotePage {...props} />
      </Provider>,
    );
    expect(addNoteContainer).toMatchSnapshot();
  });

  it('should have the following methods', () => {
    const wrapper = shallow(<AddNote {...props} />);
    expect(wrapper.instance().handleChange(fakeEvent));
    expect(wrapper.instance().handleSubmit(fakeEvent));
  });
});
