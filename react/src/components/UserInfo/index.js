import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import './index.css';

export default ({ username, avatar }) => (
  <div className="UserInfo">
    <List>
      <ListItem
        disabled={ true }
        primaryText={ username }
        leftAvatar={ <Avatar src={ avatar } /> }
        rightIconButton={
          <IconMenu
            iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
            anchorOrigin={ { horizontal: 'right', vertical: 'top' } }
            targetOrigin={ { horizontal: 'right', vertical: 'top' } }
          >
            <MenuItem primaryText="Follow Users" />
            <MenuItem primaryText="Likes" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
      >
      </ListItem>
    </List >
  </div >
)