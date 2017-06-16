import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import NewBlitzDialog from './../../components/NewBlitzDialog';

import { postBlitz } from './../../store/actions';

const style = {
  position: 'fixed',
  bottom: 20,
  right: 25,
};

class NewBlitz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      input: '',
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleSumbit = () => {
    const { input } = this.state;
    this.props.postBlitz(input);
    // .then(this.handleClose);
    this.handleClose();
  }

  handleInput = (e) => {
    const input = e.currentTarget.value;
    if (input.length < 144)
      this.setState({ input });
  }

  render () {
    return (
      <div>
        <FloatingActionButton style={ style } onClick={ this.handleOpen }>
          <ContentAdd />
          <NewBlitzDialog
            open={ this.state.open }
            handleClose={ this.handleClose }
            handleSumbit={ this.handleSumbit }
            handleInput={ this.handleInput }
            input={ this.state.input } />
        </FloatingActionButton>
      </div>
    )

  }
}

const mapDispatchToProps = (dispatch) => ({
  postBlitz: (blitz) => dispatch(postBlitz(blitz)),
});

export default connect(undefined, mapDispatchToProps)(NewBlitz);