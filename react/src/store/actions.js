import { SET_USER, BASE_URL, SET_BLITZS, ADD_BLITZ, UPDATE_BLITZ } from './constants';

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const setBlitzs = (blitzs) => ({
  type: SET_BLITZS,
  blitzs,
})

const addBlitz = (blitz) => ({
  type: ADD_BLITZ,
  blitz,
})

const updateBlitz = (blitz) => ({
  type: UPDATE_BLITZ,
  blitz,
})

const handleError = (res) => {
  if (!res.ok) throw Error(res.statusText);
  return res;
};

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

export const fetchFeed = () => (dispatch, getState) => {
  const { token } = getState().currentUser;
  const headers = new Headers({
    Authorization: `Bearer ${token}`
  });
  const config = {
    method: 'GET',
    headers,
  };

  return fetch(`${BASE_URL}/feed`, config)
    .then(res => res.json())
    .then(data => dispatch(setBlitzs(data)));
}

export const postBlitz = (content) => (dispatch, getState) => {
  const { token } = getState().currentUser;
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-type': 'application/json',
  });

  const config = {
    headers,
    method: 'POST',
    body: JSON.stringify({ content }),
  };

  return fetch(`${BASE_URL}/blitzs`, config)
    .then(handleError)
    .then(res => res.json())
    .catch(err => Promise.reject())
    .then(data => dispatch(addBlitz(data)));
}

export const likeBlitz = (id) => (dispatch, getState) => {
  const { token } = getState().currentUser;
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-type': 'application/json',
  });

  const config = {
    headers,
    method: 'POST',
  };

  return fetch(`${BASE_URL}/blitzs/${id}/like`, config)
    .then(handleError)
    .then(res => res.json())
    .catch(err => Promise.reject())
    .then(data => dispatch(updateBlitz(data)));
};