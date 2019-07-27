import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer';
import PostCreatorContainer from './containers/PostCreatorContainer';
import FullPostView from './components/FullPostView';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
            <Header>
              <Switch>
                <Route path='/posts/new' component={PostCreatorContainer}/>
                <Route path='/posts/:postID' component={FullPostView}/>
                <Route path='/' component={DashboardContainer}/>
              </Switch>
            </Header>
          </Router>
      </div>
    );
  }
}

export default App
