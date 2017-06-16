import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFeed } from './../../store/actions';

import Container from './../../components/Container';
import ListBlitz from './../../components/ListBlitz';
import NewBlitz from './../../containers/NewBlitz';

class Feed extends Component {

  componentDidMount = () => {
    this.props.fetchFeed();
  }


  render () {
    const { blitzs } = this.props;
    return (
      <Container>
        <ListBlitz blitzs={ blitzs } />
        <NewBlitz />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  blitzs: state.blitzs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
})

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
