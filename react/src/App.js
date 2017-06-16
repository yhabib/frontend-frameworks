import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout';
import Login from './routes/Login';
import Feed from './routes/Feed';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
});

export default ({ store }) =>
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store={ store }>
      <Layout>
        <Router>
          <Switch>
            {/*<Route exact path="/" component={Home} />*/ }
            <Route exact path="/" component={ Login } />
            <Route exact path="/feed" component={ Feed } />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  </MuiThemeProvider >