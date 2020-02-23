import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/dashboard/header/Header'
import DashboardContainer from './containers/DashboardContainer'
import PostCreatorContainer from './containers/PostCreatorContainer'
import FullPostView from './components/FullPostView'
import HowItWorks from './components/marketing/HowItWorks'
import Registration from './pages/registration/Registration'
import NavFooter from './components/dashboard/footer/NavFooter'

import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <div className="dashboard-view">
            <Switch>
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/posts/new" component={PostCreatorContainer} />
              <Route path="/posts/:postID" component={FullPostView} />
              <Route exact path="/how" component={HowItWorks} />
              <Route exact path="/what" component={DashboardContainer} />
              <Route path="/register" component={Registration} />
            </Switch>
          </div>

          <NavFooter />
        </Router>
      </div>
    )
  }
}

export default App
