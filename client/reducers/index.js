import { combineReducers } from 'redux';
import users from './userReducer';
import journals from './journalReducer';

const rootReducer = combineReducers({
  users,
  journals,
});

export default rootReducer;
