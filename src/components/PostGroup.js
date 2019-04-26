import UserPost from './UserPost';
import { Header, Segment, Container, Grid, GridRow, Button } from 'semantic-ui-react';
import actions from '../store/actions.js';
import store from '../store/store.js';
import faker from 'faker';

import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class PostGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
    };
  }
  render() {
    return (
      <div>
        <Header style={{paddingTop: '1.5em'}} size="huge" dividing>
        <Container style={{display: 'inline'}} floated="left">
          {this.props.title}
        </Container>
        <Container style={{display: 'inline'}} floated="right">
          <Button primary floated="right" onClick={() => store.dispatch(actions.addPost({
            author: 'Rulon',
            img: faker.image.avatar(),
            rating: {positive: 5, negative: 2},
            containerName: this.props.title,
            details: {
                action: {
                    subject: 'Pirates of the Caribbean',
                    predicate: 'watching',
                },
                status: 'Testing',
                location: 'Midwest, USA',
            }
          }))}>
            + Add post
          </Button>
        </Container>
        </Header>
        
        <Segment>
          <Grid container padded centered columns="4">
            <GridRow>
              {this.state.posts.map(function(el){
                return <Link key={el.id} to={`posts/${el.id}`}><UserPost content={el}/></Link>
              })}
            </GridRow>
          </Grid>
        </Segment>
      </div>
      )
    }
  }
  