import React from 'react'
import { number, string } from 'prop-types'
import { Link } from 'react-router-dom'

import { Icon, Item } from 'semantic-ui-react'

import { ReactComponent as TipJar } from '../../assets/tip-jar.svg'

import '../../styles/PostItem.css'

const propTypes = {
  id: string.isRequired,
  postRank: number.isRequired,
  postImage: string.isRequired,
  author: string.isRequired,
  description: string.isRequired,
  upvoteCount: number.isRequired,
  commentCount: number.isRequired,
  postTipTotal: number.isRequired
}

const defaultProps = {
  id: '',
  postRank: 0,
  postImage: '',
  author: '',
  description: '',
  upvoteCount: 0,
  commentCount: 0,
  postTipTotal: 0
}

const PostItem = props => {
  const {
    id,
    postRank,
    postImage,
    author,
    description,
    upvoteCount,
    commentCount,
    postTipTotal
  } = props

  return (
    <Item className="post-item">
      <div className="post-rank">
        <span>{postRank}</span>
      </div>

      <Link to={`/posts/${id}`} className="post-image">
        <Item.Image size="tiny" src={postImage} />
      </Link>

      <Item.Content>
        <Link to={`/posts/${id}`}>
          <div className="post-item-header">{author}</div>
        </Link>

        <Item.Description className="post-item-description">
          {description}
        </Item.Description>
        <Item.Extra>
          <span className="upvote-count">
            <Icon name="chevron up" />
            {upvoteCount}
          </span>
          <span className="post-comment-count">{commentCount} comments</span>
        </Item.Extra>
      </Item.Content>
      <div className="floated post-item-tips">
        <TipJar />
        <div className="post-tips-amount">{postTipTotal}</div>
      </div>
    </Item>
  )
}

PostItem.propTypes = propTypes

PostItem.defaultProps = defaultProps

export default PostItem
