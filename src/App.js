import React, { Component } from 'react'
import './styles/App.css'
import Header from './components/dashboard/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer'
import PostCreatorContainer from './containers/PostCreatorContainer'
import FullPostView from './components/FullPostView'
import HowItWorks from './components/marketing/HowItWorks'
import Registration from './pages/registration/Registration'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header>
            <Switch>
              <Route exact path="/" component={DashboardContainer} />
              <Route
                exact
                path="/posts/</Switch>new"
                component={PostCreatorContainer}
              />
              <Route path="/posts/:postID" component={FullPostView} />
              <Route exact path="/how" component={HowItWorks} />
              <Route exact path="/what" component={DashboardContainer} />
              <Route path="/register" component={Registration} />
            </Switch>
          </Header>
        </Router>
      </div>
    )
  }
}

export default App
