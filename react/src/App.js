import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './routes/Login';
import Feed from './routes/Feed';

export default ({ store }) =>
  <MuiThemeProvider>
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