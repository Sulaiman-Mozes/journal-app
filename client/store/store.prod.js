import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk),
);

export default store;
