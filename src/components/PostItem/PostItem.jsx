import React from 'react'
import { Icon, Item } from 'semantic-ui-react'

import { ReactComponent as TipJar } from '../../assets/tip-jar.svg'

import '../../styles/PostItem.css'

const PostItem = props => {
  return (
    <Item className="post-item">
      <div className="post-rank">
        <span>1</span>
      </div>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <div className="post-item-header">Pamela</div>
        <Item.Description className="post-item-description">
          Going out to lunch with the girls...
        </Item.Description>
        <Item.Extra>
          <span className="upvote-count">
            <Icon name="chevron up" />
            39
          </span>
          <span className="post-comment-count">3 comments</span>
        </Item.Extra>
      </Item.Content>
      <div className="floated post-item-tips">
        <TipJar />
        <div className="post-tips-amount">135.450</div>
      </div>
    </Item>
  )
}

export default PostItem
