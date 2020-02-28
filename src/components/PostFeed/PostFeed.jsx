import React from 'react'
import { arrayOf, object } from 'prop-types'

import Header from '../common/Header'
import PostGroup from '../PostGroup'

import '../../styles/PostFeed.css'

// for testing only
import { fetchPostGroups } from '../../util/data-faker'

console.log(fetchPostGroups())
const propTypes = {
  postGroups: arrayOf(object).isRequired
}

const defaultProps = {
  postGroups: [
    {
      groupDate: '',
      groupTitle: '',
      groupCount: 0,
      groupTipTotal: 0,
      groupPosts: [],
      shortlist: false
    }
  ]
}

const PostFeed = () => {
  // const { postGroups} = props
  const { postGroups } = fetchPostGroups()

  return (
    <div className="posts-container">
      <Header />
      <div className="post-feed">
        {postGroups.map((group, idx) => {
          const {
            groupTitle,
            groupCount,
            groupTipTotal,
            groupPosts,
            shortlist
          } = group

          return (
            <PostGroup
              key={idx}
              groupTitle={groupTitle}
              groupCount={groupCount}
              groupTipTotal={groupTipTotal}
              groupPosts={groupPosts}
              shortlist={shortlist}
            />
          )
        })}
      </div>
    </div>
  )
}

PostFeed.propTypes = propTypes

PostFeed.defaultProps = defaultProps

export default PostFeed
