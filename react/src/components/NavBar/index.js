import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import { fetchLocalUserActionCreator, logOutUser } from './../../store/actions';

import UserInfo from './../UserInfo';

class NavBar extends Component {

  componentWillMount = () => {
    this.props.fetchLocalUser();
  }

  logOut = () => {
    this.props.logOut();
  }

  render () {
    const { username, avatar } = this.props;
    return (
      <AppBar
        title="Blitz"
        showMenuIconButton={ false }
        style={ {
          position: 'fixed', fontFamily: '"Roboto Mono", monospace',
        } }
        iconStyleRight={ { marginTop: 0 } }
        iconElementRight={
          username && avatar ?
            <UserInfo username={ username } avatar={ avatar } logOut={ this.logOut } /> : null
        }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.currentUser.username,
  avatar: state.currentUser.avatar,
})

const mapDispatchToProps = (dispatch) => ({
  fetchLocalUser: () => dispatch(fetchLocalUserActionCreator()),
  logOut: () => dispatch(logOutUser()),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);