import React from 'react';
import { ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Avatar from 'material-ui/Avatar';

export default ({ blitz }) => (
  <ListItem
    primaryText={ blitz.content }
    leftAvatar={ <Avatar src={ blitz._user.avatar } /> }
    rightIcon={ <CommunicationChatBubble /> }
  />
)