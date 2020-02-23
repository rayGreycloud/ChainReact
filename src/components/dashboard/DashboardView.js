import React from 'react'
import PostGroupContainer from '../../containers/PostGroupContainer'
import HowItWorks from './marketing/HowItWorks'
import Goals from './marketing/Goals'

export default function DashboardView({ postGroups }) {
  return (
    <>
      <div
        style={{
          width: '75vw',
          margin: '6em 10%',
          justifyContent: 'center'
        }}
      >
        {Object.keys(postGroups).map(pgName => {
          return (
            <PostGroupContainer
              key={`${pgName}${postGroups[pgName].length}` || 0}
              title={pgName}
              posts={postGroups[pgName]}
            />
          )
        })}
      </div>
      <div style={{ width: '100vw' }}>
        <Goals />
        <HowItWorks />
      </div>
    </>
  )
}
