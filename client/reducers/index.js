import { combineReducers } from 'redux';
import user from './userReducer';
import journals from './journalReducer';

const reducer = combineReducers({
  user,
  journals,
});

export default reducer;
