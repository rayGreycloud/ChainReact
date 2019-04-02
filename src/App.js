import React, { Component } from 'react';
import './styles/App.css';
import './views/Dashboard';
import Dashboard from './views/Dashboard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DashboardHeader from './components/DashboardHeader';

library.add(faBars)

class App extends Component {
  render() {
    return (
      <div className="app">
        <DashboardHeader/>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App
