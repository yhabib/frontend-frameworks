import { SET_BLITZS, ADD_BLITZ, UPDATE_BLITZ } from './../constants';

export default (state = [], action) => {
  let blitz;
  switch (action.type) {
    case SET_BLITZS:
      return [...action.blitzs];
    case ADD_BLITZ:
      blitz = { ...action.blitz };
      return [...state, blitz];
    case UPDATE_BLITZ:
      blitz = { ...action.blitz };
      return state.map(b => b._id === blitz._id ? blitz : b);
    default:
      return state;
  }
}