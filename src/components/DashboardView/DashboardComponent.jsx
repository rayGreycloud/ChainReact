import React from 'react'
import PostGroupContainer from '../PostGroup/PostGroupContainer'
// import HowItWorks from '../HowItWorks'
// import Goals from '../Goals'

export default function DashboardComponent({ postGroups }) {
  return (
    <>
      <div
        style={{
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
      {/* <div style={{ width: '100vw' }}>
        <Goals />
        <HowItWorks />
      </div> */}
    </>
  )
}
