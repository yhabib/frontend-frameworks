import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
  position: 'fixed',
  bottom: 20,
  right: 25,
};

export default () => (
  <div>
    <FloatingActionButton style={ style }>
      <ContentAdd />
    </FloatingActionButton>
  </div>
)
