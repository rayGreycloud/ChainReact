import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Dashboard/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer';
import PostCreatorContainer from './containers/PostCreatorContainer';
import FullPostView from './components/FullPostView';
import HowItWorks from './components/Marketing/HowItWorks';
import WhatWeDo from './components/Marketing/WhatWeDo'

class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
            <Header>
              <Switch>
                <Route exact path='/' component={DashboardContainer}/>
                <Route path='/posts/new' component={PostCreatorContainer}/>
                <Route path='/posts/:postID' component={FullPostView}/>
                <Route exact path='/how' component={HowItWorks}/>
                <Route exact path='/what' component={WhatWeDo}/>
              </Switch>
            </Header>
          </Router>
      </div>
    );
  }
}

export default App
