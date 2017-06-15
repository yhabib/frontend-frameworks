import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';

export default ({ handleClose, handleSumbit, open, input, handleInput }) => (
  <div>
    <Dialog
      title="What is in your mind???"
      actions={ [
        <FlatButton
          label="Cancel"
          primary={ true }
          onTouchTap={ handleClose }
        />,
        <FlatButton
          label="Blitz"
          primary={ true }
          keyboardFocused={ true }
          onTouchTap={ handleSumbit }
        />,
      ] }
      modal={ false }
      open={ open }
      onRequestClose={ handleClose }
    >
      <TextField
        style={ { width: 400, } }
        value={ input }
        onChange={ handleInput }
        hintText="Introduce your new Blitz"
      />
    </Dialog>
  </div >
)