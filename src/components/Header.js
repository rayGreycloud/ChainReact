import React, { Component } from 'react'
import '../styles/DashboardHeader.css'
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

// Navigation header. Holds the menu button (TODO: define functionality w/ Adam) and user profile buttons
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-header">
          <span style={{marginLeft: '4px'}}></span>
          <Link to="/" className="dashboard-button"><span >G'dayFam</span></Link>
          <LoginModal/>
        </div>
        <div className="dashboard-view">
          {this.props.children}
        </div>
      </div>
    )
  }
}
