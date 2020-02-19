import React from 'react'

import { Header, Icon, Item, Divider, Select } from 'semantic-ui-react'

import PostItem from '../PostItem'

import '../../styles/PostGroup.css'

const defaultProps = {
  groupTitle: 'Today',
  groupCount: 30,
  groupTipTotal: 50,
  groupPosts: []
}

const PostGroup = props => {
  const { groupTitle, groupCount, groupTipTotal, groupPosts } = props

  const filterOptions = [
    { key: 1, value: 'tips', text: 'Tips Total' },
    { key: 2, value: 'upvotes', text: 'Vote Count' },
    { key: 3, value: 'comments', text: 'Comment Count' },
    { key: 4, value: 'views', text: 'View Count' }
  ]

  return (
    <div>
      <div className="post-group-heading">
        <Header as="h2">
          <span className="post-group-header">{groupTitle}</span>
          <Header.Subheader>
            {groupCount} selfies and {groupTipTotal} XRP tips were generated
          </Header.Subheader>
        </Header>
        <div className="filter-selector">
          <span>Sort by: </span>
          <Select
            options={filterOptions}
            defaultValue="tips"
            icon="chevron down"
          />
          <Icon name="question circle outline" size="large" />
        </div>
      </div>

      <Divider />

      <Item.Group divided>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Item.Group>

      <Divider />
    </div>
  )
}

PostGroup.defaultProps = defaultProps

export default PostGroup
