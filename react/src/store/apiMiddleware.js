import { API, BASE_URL } from './constants';

export default ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== API)
    return next(action);

  const { token } = getState().currentUser;

  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-type': 'application/json',
  });

  const config = {
    method: action.method || 'GET',
    headers,
    body: JSON.stringify(action.body),
  };

  const actionCreator = action.success;

  fetch(`${BASE_URL}${action.url}`, config)
    .then(res => res.json())
    .then(data => dispatch(actionCreator(data)))
    .catch(err => console.error(err));
}