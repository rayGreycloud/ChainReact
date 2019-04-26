import React, { Component } from 'react';
import './styles/App.css';
import './containers/PostGroupContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FullPostViewContainer from './containers/FullPostViewContainer';
import DashboardContainer from './containers/DashboardContainer';

library.add(faBars)

class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
            <Header>
              <Route exact path='/' component={DashboardContainer}/>
              <Route path='/posts/:postID' component={FullPostViewContainer}/>
            </Header>
          </Router>
      </div>
    );
  }
}

export default App
