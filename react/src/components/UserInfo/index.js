import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FlatButton from 'material-ui/FlatButton';

import './index.css';

export default ({ username, avatar }) => (
  <div className="UserInfo">
    <List>
      <ListItem
        disabled={ true }
        leftAvatar={
          <Avatar src={ avatar } />
        }
      >
        <FlatButton label={ username } />
      </ListItem>
    </List>
  </div>
)