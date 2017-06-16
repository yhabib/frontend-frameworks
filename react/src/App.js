import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout';
import Login from './routes/Login';
import Feed from './routes/Feed';
import Users from './routes/Users';
import User from './routes/User';
import Likes from './routes/Likes';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
});

export default ({ store }) =>
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store={ store }>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/likes" component={ Likes } />
            <Route exact path="/users" component={ Users } />
            <Route exact path="/users/:id" component={ User } />
            <Route exact path="/feed" component={ Feed } />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </MuiThemeProvider >