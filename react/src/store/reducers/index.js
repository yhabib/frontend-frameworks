import { combineReducers } from 'redux';

import currentUser from './currentUser';
import blitzs from './blitzs';

export default combineReducers({
  currentUser,
  blitzs,
});
