import React from 'react'

import '../../styles/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="logo-container">
        <div className="logo">
          <span>gFam</span>
        </div>
      </div>
      <div className="home-headline">
        <div>Post Your Photos...</div>
        <div>...Get Rewards</div>
      </div>
      <div className="home-section">
        <div className="home-title">Welcome to the Internet of Value!</div>
        <p className="home-text">
          Traditional social media is broken... Platforms make huge amounts of
          money off your content. It's your turn.
        </p>
      </div>
      <div className="home-section">
        <div className="home-title">No advertisers or third-party costs!</div>
        <p className="home-text">
          Your audience pays you directly if they enjoy your content... No one
          makes money off your content, except you.
        </p>
      </div>
    </div>
  )
}

export default Home