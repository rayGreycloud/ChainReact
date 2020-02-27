import React, { useState, useEffect } from 'react'
import { array, bool, number, string } from 'prop-types'

import { Button, Header, Icon, Item, Divider, Select } from 'semantic-ui-react'

import PostItem from '../PostItem'

import '../../styles/PostGroup.css'

const propTypes = {
  groupDate: string.isRequired,
  groupTitle: string.isRequired,
  groupCount: number.isRequired,
  groupTipTotal: number.isRequired,
  groupPosts: array,
  shortlist: bool
}

const defaultProps = {
  groupDate: '',
  groupTitle: '',
  groupCount: 0,
  groupTipTotal: 0,
  groupPosts: [],
  shortlist: false
}

const PostGroup = props => {
  const { groupTitle, groupCount, groupTipTotal, groupPosts, shortlist } = props

  const [isShortlist, setIsShortlist] = useState(false)
  const [displayPosts, setDisplayPosts] = useState(groupPosts)
  const [selectedFilter, setSelectedFilter] = useState('')

  // sort posts function
  const getSortedPosts = () => {
    const newList = groupPosts.slice()
    newList.sort((a, b) => {
      return (a[selectedFilter] - b[selectedFilter]) * -1
    })
    return newList
  }

  // initialize after Mount
  useEffect(() => {
    setSelectedFilter('postTipTotal')
    setIsShortlist(shortlist)
  }, [])

  // sort posts by filter
  useEffect(() => {
    const newList = getSortedPosts(selectedFilter)
    setDisplayPosts(newList)
  }, [selectedFilter])

  useEffect(() => {
    const posts = isShortlist ? groupPosts.slice(0, 10) : groupPosts
    setDisplayPosts(posts)
  }, [isShortlist])

  const filterOptions = [
    { key: 1, value: 'postTipTotal', text: 'Tips Total' },
    { key: 2, value: 'upvoteCount', text: 'Vote Count' },
    { key: 3, value: 'commentCount', text: 'Comment Count' },
    { key: 4, value: 'viewCount', text: 'View Count' }
  ]

  const handleSelect = (e, { value }) => {
    setSelectedFilter(value)
  }

  const handleClick = () => setIsShortlist(false)

  return (
    <div className="post-group">
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
            value={selectedFilter}
            icon="chevron down"
            onChange={handleSelect}
          />
          <Icon name="question circle outline" size="large" />
        </div>
      </div>

      <Divider />

      <Item.Group divided>
        {displayPosts.map((post, idx) => {
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
            <PostItem
              key={`${id}${idx}`}
              id={id}
              postRank={idx + 1}
              postImage={postImage}
              author={author}
              description={description}
              upvoteCount={upvoteCount}
              commentCount={commentCount}
              postTipTotal={postTipTotal}
            />
          )
        })}
      </Item.Group>

      <Divider />

      {isShortlist && (
        <div className="post-group-btn">
          <Button basic content="Show All" onClick={handleClick} />
        </div>
      )}
    </div>
  )
}

PostGroup.propTypes = propTypes

PostGroup.defaultProps = defaultProps

export default PostGroup
