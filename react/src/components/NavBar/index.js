import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import { fetchLocalUserActionCreator, logOutUser } from './../../store/actions';

import UserInfo from './../UserInfo';

class NavBar extends Component {

  componentWillMount = () => {
    this.props.fetchLocalUser();
  }

  toFeed = () => {
    this.props.history.push('/feed');
  }

  logOut = () => {
    this.props.logOut();
  }

  render () {
    const { username, avatar } = this.props;
    return (
      <AppBar
        title="Blitz"
        onTitleTouchTap={ this.toFeed }
        titleStyle={ { cursor: 'pointer', } }
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));