import React from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';

import UserInfo from './../UserInfo';

const NavBar = ({ username, avatar }) => (
  <AppBar
    title="Blitz"
    style={ { position: 'fixed', } }
    iconElementRight={ username && avatar ?
      <UserInfo username={ username } avatar={ avatar } />
      : ''
    }
  />
)

const mapStateToProps = (state) => ({
  username: state.currentUser.username,
  avatar: state.currentUser.avatar,
})

export default connect(mapStateToProps)(NavBar);