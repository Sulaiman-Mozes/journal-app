import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import DeleteNotePage, { DeleteNote } from '../../../containers/journals/deleteNote';

describe('JournalPage Container', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const props = {
    deleteFunc: jest.fn(),
    id: '6347ewytug7854uieajksfhv9ioq34',
  };

  it('should render correctly', () => {
    const deleteContainer = shallow(
      <Provider store={store}>
        <DeleteNotePage {...props} />
      </Provider>,
    );
    expect(deleteContainer).toMatchSnapshot();
  });

  it('should have the following methods', () => {
    const wrapper = shallow(<DeleteNote {...props} />);
    expect(wrapper.instance().handleDelete());
  });
});
