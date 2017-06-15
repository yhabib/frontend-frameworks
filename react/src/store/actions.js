import { SET_USER, BASE_URL } from './constants';

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

  const handleError = (res) => {
    console.log(res);
    if (!res.ok) throw Error(res.statusText);
    return res;
  };

  return fetch(`${BASE_URL}/login`, config)
    .then(handleError)
    .then(res => res.json())
    .catch(err => Promise.reject())
    .then(data => {
      const user = { ...data };
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);

      dispatch(setUser(user));
    })
};


export const fetchLocalUserActionCreator = (pusher, url) => (dispatch) => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    dispatch(setUser(user));
    pusher(url);
  }
}

export const fetchFeed = () => (dispatch, getState) => {
  const { token } = getState().currentUser;
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`
  });
  const config = {
    method: 'GET',
    headers: myHeaders,
  };

  return fetch(`${BASE_URL}/feed`, config)
    .then(res => res.json());
}