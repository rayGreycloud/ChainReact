import React from 'react'
import PostGroup from '../PostGroup'
import HowItWorks from '../HowItWorks'
import Goals from '../Goals'

export default function DashboardComponent({ postGroups }) {
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
            <PostGroup
              key={`${pgName}${postGroups[pgName].length}`}
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
