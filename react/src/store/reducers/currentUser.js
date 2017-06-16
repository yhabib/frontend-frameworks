import { SET_USER, REMOVE_USER } from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.user };
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}