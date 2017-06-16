import React from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import Blitz from './../../containers/Blitz';

const paperStyle = {
  width: '100%',
  textAlign: 'center',
  marginTop: 60,
  padding: '5px 0',
};


export default ({ blitzs }) => (
  <Paper style={ paperStyle } zDepth={ 5 } >
    <List>
      {
        blitzs.map((blitz, index) =>
          <Blitz key={ index } blitz={ blitz } />
        )
      }
    </List>
  </Paper>
)
