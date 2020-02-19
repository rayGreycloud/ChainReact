import React from 'react'
import { Icon, Item } from 'semantic-ui-react'

import { ReactComponent as TipJar } from '../../assets/tip-jar.svg'

import '../../styles/PostItem.css'

const defaultProps = {
  postRank: 1,
  postImage: 'https://react.semantic-ui.com/images/wireframe/image.png',
  author: 'Pamela',
  description: 'Going to lunch with the girls...',
  upvoteCount: 39,
  commentCount: 3,
  postTipTotal: 135.45
}

const PostItem = props => {
  const {
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
      <Item.Image size="tiny" src={postImage} />

      <Item.Content>
        <div className="post-item-header">{author}</div>
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

PostItem.defaultProps = defaultProps

export default PostItem
