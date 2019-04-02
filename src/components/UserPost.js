import React, { Component } from 'react'
import faker from 'faker'
import '../styles/UserPost.css'
import { Image } from 'semantic-ui-react';

export default class UserPost extends Component {
  render() {
    return (
      <div className="user-post">
        <Image className="post-content" src={faker.image.avatar()} alt="sample post"/>
      </div>
    )
  }
}
