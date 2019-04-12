//TODO: Create a container for posts instead of shoving them in the dashboard view directly
import UserPost from '../components/UserPost';
import { Header, Segment, Grid, GridRow } from 'semantic-ui-react';


import React, { Component } from 'react'

export default class PostGroup extends Component {
  constructor(props) {
    super(props)
    let posts = [];
    for (let i = 0; i < props.numPosts; i++) {
      posts.push(<UserPost key={i}/>);
    }
    this.state = {
      postsToRender: posts,
    }
  }
  

  render() {
    return (
      <div>
        <Header style={{paddingTop: '1.5em'}} size="huge">{this.props.title}</Header>
        <Segment>
          <Grid container padded centered columns="4">
            <GridRow>
              {this.state.postsToRender}
            </GridRow>
          </Grid>
        </Segment>
      </div>
      )
    }
  }
  