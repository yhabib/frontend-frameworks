import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import Container from './../../components/Container';
import LoginForm from './../../components/LoginForm';

import { loginActionCreator } from './../../store/actions';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    // this.props.dispatch(loginActionCreator(email, password));
    this.props.login(email, password)
      .then(() => this.props.history.push('/feed'));
  }

  updateEmail = (e) => {
    this.setState({ email: e.currentTarget.value });
  }

  updatePassword = (e) => {
    this.setState({ password: e.currentTarget.value });
  }

  render () {
    const { email, password } = this.state;

    return (
      <Container>
        <LoginForm
          email={ email } password={ password }
          updateEmail={ this.updateEmail } updatePassword={ this.updatePassword } handleLogin={ this.handleLogin } />
      </Container>
    )
  }
}
// this.props.dispatch(loginActionCreator(user, password));
// by doing this the component has no dispatch on its propreties, the component doesnt care about how it works
const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(loginActionCreator(email, password)),
});

export default connect(undefined, mapDispatchToProps)(Login);

// case the component is not in the routes and we want to access the router info
// export default connect(undefined, mapDispatchToProps)(withRouter(Login)); case the component is not in the routes and we want to access the router info