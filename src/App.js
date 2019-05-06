import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FullPostViewContainer from './containers/FullPostViewContainer';
import DashboardContainer from './containers/DashboardContainer';


class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
            <Header>
              <Switch>
                <Route path='/posts/:postID' component={FullPostViewContainer}/>
                <Route path='/' component={DashboardContainer}/>
              </Switch>
            </Header>
          </Router>
      </div>
    );
  }
}

export default App
