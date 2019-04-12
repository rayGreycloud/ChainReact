import React, { Component } from 'react'
import faker from 'faker'
import '../styles/UserPost.css'
import { Image, Segment, GridColumn } from 'semantic-ui-react';

export default class UserPost extends Component {
  render() {
    return (
      <GridColumn>
        <Segment className="user-post">
          <Image className="post-content" rounded src={faker.image.avatar()} alt="sample post"/>
        </Segment>
      </GridColumn>
    )
  }
}
