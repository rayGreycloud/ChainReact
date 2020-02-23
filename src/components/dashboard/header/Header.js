import React from 'react'
import { Link } from 'react-router-dom'

import LoginButton from '../../LoginButton'

import '../../../styles/DashboardHeader.css'

// Navigation header. Holds the menu button (TODO: define functionality w/ Adam) and user profile buttons
const Header = () => (
  <div className="dashboard-header">
    <span className="dashboard-section"></span>
    <Link to="/" className="dashboard-button">
      <span>G'dayFam</span>
    </Link>
    <LoginButton />
  </div>
)

export default Header
