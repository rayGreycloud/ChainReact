import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import {
  Header,
  Segment,
  Container,
  Grid,
  GridRow,
  Button
} from 'semantic-ui-react'

import PostItem from '../PostItem'
import { baseURL } from '../../util/API'

class PostGroupComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts
    }
  }

  componentDidUpdate(pProps, pState, snapshot) {
    if (!_.isEqual(pProps.posts, this.props.posts)) {
      this.setState({ posts: this.props.posts })
    }
  }

  createSegments = posts => {
    // debugger;
    return posts
      ? posts.map(el => {
          return (
            <Link key={el.postID} to={`posts/${el.postID}`}>
              <PostItem img={`${baseURL}/posts/content/${el.postID}`} />
            </Link>
          )
        })
      : null
  }

  render() {
    return (
      <div>
        <Header style={{ paddingTop: '1.5em' }} size="huge" dividing>
          <Container style={{ display: 'inline' }} floated="left">
            {this.props.title}
          </Container>
          <Container style={{ display: 'inline' }} floated="right">
            {this.props.title === 'today' && (
              <Button
                primary
                floated="right"
                onClick={() => {
                  this.props.history.push('/posts/new')
                }}
              >
                + Add post
              </Button>
            )}
          </Container>
        </Header>

        <Segment>
          <Grid container padded centered columns="4">
            <GridRow>{this.createSegments(this.state.posts)}</GridRow>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default withRouter(PostGroupComponent)
