import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/DashboardHeader.css'

// Navigation header. Holds the menu button (TODO: add functionality) and user profile buttons
export default class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <span style={{marginLeft: '4px'}}></span>
        <span className="dashboard-button">Kettle.io</span>
        <FontAwesomeIcon className="dashboard-button dashboard-menu" style={{marginRight: "4px"}} icon="bars"/>
      </div>
    )
  }
}
