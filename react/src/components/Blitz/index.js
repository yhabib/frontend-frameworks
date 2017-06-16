import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

import { likeBlitz } from './../../store/actions';

const Blitz = ({ blitz, like }) => (
  <ListItem
    primaryText={ blitz.content }
    leftAvatar={ <Avatar src={ blitz._user.avatar } /> }
    rightIcon={ blitz.isLiked ?
      <FontIcon className="material-icons" onClick={ like }>favorite</FontIcon> :
      <FontIcon className="material-icons" onClick={ like }>favorite_border</FontIcon> }
  />
)

const mapDispatchToProps = (dispatch, props) => ({
  like: () => dispatch(likeBlitz(props.blitz._id))
})
export default connect(undefined, mapDispatchToProps)(Blitz);