import React, { Component } from 'react'
import { Image, Segment, GridColumn } from 'semantic-ui-react'

import '../../styles/UserPost.css'

export default class PostItem extends Component {
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
          <Image
            className="post-content"
            rounded
            src={this.state.imgSrc}
            alt="sample post"
          />
        </Segment>
      </GridColumn>
    )
  }
}
