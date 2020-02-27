import React from 'react'
import { array, number, string } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Segment,
  Image,
  Divider,
  Rating,
  Container,
  Item,
  Icon
} from 'semantic-ui-react'

import '../../styles/PostContent.css'

const propTypes = {
  id: string.isRequired,
  postImage: string.isRequired,
  author: string.isRequired,
  description: string.isRequired,
  upvoteCount: number.isRequired,
  commentCount: number.isRequired,
  postTipTotal: number.isRequired,
  comments: array
}

const defaultProps = {
  id: '',
  postImage: 'https://react.semantic-ui.com/images/wireframe/image.png',
  author: '',
  description: '',
  upvoteCount: 0,
  commentCount: 0,
  postTipTotal: 0
}

const PostContent = ({ post }) => {
  const {
    id,
    postImage,
    author,
    description,
    upvoteCount,
    commentCount,
    postTipTotal
  } = post

  return (
    <>
      <Segment className="post-content" size="big">
        <Item.Content>
          <Link to={`/posts/${id}`}>
            <div className="post-header">{author}</div>
          </Link>

          <Item.Description className="post-description">
            {description}
          </Item.Description>
          <Item.Extra>
            <span className="upvote-count">
              <Icon name="chevron up" />
              {upvoteCount}
            </span>
            <span className="post-comment-count">{commentCount} comments</span>
            <span className="post-tip-total">Tips: {postTipTotal}</span>
          </Item.Extra>
        </Item.Content>
      </Segment>
      <Segment size="big">
        <Image centered={true} size="large" src={postImage} />
        <Divider />
        <Container textAlign="center">
          <Rating
            maxRating={10}
            defaultRating={0}
            icon="star"
            size="large"
            centered="true"
          />
        </Container>
        <Divider />
      </Segment>
    </>
  )
}

PostContent.propTypes = propTypes

PostContent.defaultProps = defaultProps

export default PostContent
