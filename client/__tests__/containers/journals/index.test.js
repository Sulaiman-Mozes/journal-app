import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import JournalPage, { Journals } from '../../../containers/journals';

describe('JournalPage Container', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const props = {
    getAllNotes: jest.fn(),
    list: {
      notes: [],
      loading: false,
      error: '',
    },
  };

  it('should render correctly', () => {
    const journalContainer = shallow(
      <Provider store={store}>
        <JournalPage {...props} />
      </Provider>,
    );
    expect(journalContainer).toMatchSnapshot();
  });

  it('should have the following methods', () => {
    const wrapper = shallow(<Journals {...props} />);
    expect(wrapper.instance().handleDelete('vw647y3urt87uh3wa63478'));
  });
});
