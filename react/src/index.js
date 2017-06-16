import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import store from './store'
import './index.css';
import { fetchLocalUserActionCreator } from './store/actions';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Even before that React is loaded
store.dispatch(fetchLocalUserActionCreator());

ReactDOM.render(
  <App store={ store } />,
  document.getElementById('root')
);

registerServiceWorker();