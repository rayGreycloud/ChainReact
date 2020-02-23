import React, { Component } from 'react'
import '../styles/UserPost.css'
import { Image, Segment, GridColumn } from 'semantic-ui-react'

export default class UserPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgSrc: props.img
    }
  }

  render() {
    return (
      <GridColumn>
        <Segment className="user-post">
          <Image className="post-content" rounded src={this.state.imgSrc} alt="sample post" />
        </Segment>
      </GridColumn>
    )
  }
}
