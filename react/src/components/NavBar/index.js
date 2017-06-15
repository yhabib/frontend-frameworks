import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import { fetchLocalUserActionCreator } from './../../store/actions';

import UserInfo from './../UserInfo';

class NavBar extends Component {

  componentWillMount = () => {
    this.props.fetchLocalUser();
  }

  render () {
    const { username, avatar } = this.props;
    return (
      <AppBar
        title="Blitz"
        style={ { position: 'fixed', } }
        iconElementRight={ username && avatar ?
          <UserInfo username={ username } avatar={ avatar } /> : null
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
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);