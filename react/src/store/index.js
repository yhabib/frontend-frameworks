import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import ApiMiddleware from './apiMiddleware';
import reducer from './reducers';

export default createStore(
  reducer,
  applyMiddleware(thunk, ApiMiddleware),
);
