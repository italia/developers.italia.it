import { combineReducers } from 'redux';
import queryReducer from './queryReducer.js';

export default combineReducers({
  query: queryReducer,
});
