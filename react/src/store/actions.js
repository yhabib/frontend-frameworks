import {
  SET_USER,
  REMOVE_USER,
  BASE_URL,
  ADD_BLITZS,
  ADD_BLITZ,
  UPDATE_BLITZ,
  API,
} from './constants';


const handleError = (res) => {
  if (!res.ok) throw Error(res.statusText);
  return res;
};

const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const loginActionCreator = (email, password) => (dispatch) => {

  const headers = new Headers({
    'Content-type': 'application/json',
  });
  const config = {
    headers,
    method: 'POST',
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${BASE_URL}/login`, config)
    .then(handleError)
    .then(res => res.json())
    .catch(err => Promise.reject())
    .then(data => {
      const user = { ...data };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(setUser(user));
    })
};

export const fetchLocalUserActionCreator = () => (dispatch) => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    dispatch(setUser(user));
  }
}


export const addBlitzs = (blitzs) => ({
  type: ADD_BLITZS,
  blitzs,
});

export const fetchFeed = () => ({
  type: API,
  url: '/feed',
  method: 'GET',
  success: addBlitzs,
});


const addBlitz = (blitz) => ({
  type: ADD_BLITZ,
  blitz,
})

export const postBlitz = (content) => ({
  url: '/blitzs',
  body: { content },
  type: API,
  method: 'POST',
  success: addBlitz
})


const updateBlitz = (blitz) => ({
  type: UPDATE_BLITZ,
  blitz,
})

export const likeBlitz = (id) => ({
  type: API,
  url: `/blitzs/${id}/like`,
  method: 'POST',
  success: updateBlitz
});


const removeUser = () => ({
  type: REMOVE_USER,
});

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch(removeUser());
};
