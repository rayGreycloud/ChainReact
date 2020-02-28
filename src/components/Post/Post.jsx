import React from 'react'
import { object } from 'prop-types'
import PostContent from './PostContent'
import Comment from '../Comment'

import '../../styles/Post.css'

const propTypes = {
  post: object.isRequired
}

const defaultProps = {
  post: {
    id: '6e8219fb-4b8e-41d8-844b-3e57a83ddf73',
    postImage: 'https://react.semantic-ui.com/images/wireframe/image.png',
    author: 'Sunny',
    description: 'Ipsa molestias eum.',
    upvoteCount: 41,
    commentCount: 19,
    postTipTotal: 2.3
  }
}

const Post = props => {
  const { post } = props
  return (
    <div className="post-page">
      <div className="post-container">
        <PostContent post={post} />
        <div className="comment-container">
          <Comment />
        </div>
      </div>
    </div>
  )
}

Post.propTypes = propTypes

Post.defaultProps = defaultProps

export default Post
