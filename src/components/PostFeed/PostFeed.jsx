import React from 'react'
import { arrayOf, object } from 'prop-types'

import PostGroup from '../PostGroup'

import '../../styles/PostFeed.css'

// for testing only
import { getDummyPostData } from '../../util/data-posts'

console.log(getDummyPostData())
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
  const { postGroups } = getDummyPostData()

  return (
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
  )
}

PostFeed.propTypes = propTypes

PostFeed.defaultProps = defaultProps

export default PostFeed
