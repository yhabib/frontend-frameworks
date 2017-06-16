import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';

import './index.css';

export default ({ username, avatar, logOut }) => (
  <div className="UserInfo">
    <List>
      <ListItem
        disabled={ true }
        primaryText={ username }
        leftAvatar={ <Avatar src={ avatar } /> }
        style={ { color: 'white' } }
        rightIconButton={
          <IconMenu
            iconButtonElement={ <IconButton><MoreVertIcon color={ white } /></IconButton> }
            anchorOrigin={ { horizontal: 'right', vertical: 'top' } }
            targetOrigin={ { horizontal: 'right', vertical: 'top' } }
          >
            <Link to="/users" style={ { textDecoration: 'none' } }><MenuItem primaryText="Follow Users" /></Link>
            <Link to="/likes" style={ { textDecoration: 'none' } }><MenuItem primaryText="Likes" /></Link>
            <Link to="/" style={ { textDecoration: 'none' } }><MenuItem primaryText="Log out" onClick={ logOut } /></Link>
          </IconMenu>
        }
      >
      </ListItem>
    </List >
  </div >
)