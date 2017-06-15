import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFeed } from './../../store/actions';

import Container from './../../components/Container';
import ListBlitz from './../../components/ListBlitz';

class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blitzs: []
    }
  }

  componentDidMount = () => {
    this.props.fetchFeed()
      .then(data => this.setState({ blitzs: [...data] }));
  }

  render () {
    return (
      <Container>
        <ListBlitz blitzs={ this.state.blitzs } />
      </Container>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(undefined, mapDispatchToProps)(Feed);
