import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
