import React from 'react';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './index.css';

const paperStyle = {
  width: '100%',
  height: 400,
  textAlign: 'center',
  padding: '50px 0',
};

const buttonStyle = {
  margin: 12,
};

export default ({ email, password, updateEmail, updatePassword, handleLogin }) => (
  <Paper style={ paperStyle } zDepth={ 5 } >
    <h2>Log In</h2>
    <form onSubmit={ handleLogin } className="LoginForm">
      <TextField
        floatingLabelText="Email"
        type="email"
        value={ email }
        onChange={ updateEmail }
      />
      <TextField
        floatingLabelText="Password"
        type="password"
        value={ password }
        onChange={ updatePassword }
      />
      <RaisedButton type="submit" label="Login" style={ buttonStyle } onClick={ handleLogin } />
    </form>
  </Paper >
)