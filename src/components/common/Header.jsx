import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LoginButton from '../../LoginButton'
import NavFooter from '../footer/NavFooter'

import '../../styles/DashboardHeader.css'

// Navigation header. Holds the menu button (TODO: define functionality w/ Adam) and user profile buttons
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-header">
          <span style={{ marginLeft: '4px' }}></span>
          <Link to="/" className="dashboard-button">
            {/* FIXME: This is off-center. Re-work the header a bit. */}
            <span>G'dayFam</span>
          </Link>
          <LoginButton />
        </div>
        <div className="dashboard-view">
          {this.props.children}
          <NavFooter />
        </div>
      </div>
    )
  }
}
