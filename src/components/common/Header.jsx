import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Image } from 'semantic-ui-react'

import SearchBar from './SearchBar'

import '../../styles/Header.css'

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-section">
          <div className="user-avatar">
            <Image
              src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
              circular
            />
          </div>
          <Icon name="plus" size="large" />
          <div className="">
            <SearchBar />
          </div>
        </div>
        <Link to="/" className="header-button">
          <span>gFam</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
