import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
// import Header from './components/common/Header'
import PostFeed from './components/PostFeed';
import Post from './components/Post';
// import Registration from './pages/RegistrationPage'
import RegisterForm from './components/RegisterForm';
import RegisterWelcome from './components/RegisterWelcome';

import './styles/AppRouter.css';

const SideRoutes = () => {
  return (
    <div className='panel-side'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts/:id' component={Post} />
        <Route path='/register' component={RegisterWelcome} />
      </Switch>
    </div>
  );
};

const MainRoutes = () => {
  return (
    <div className='panel-main'>
      <Switch>
        <Route exact path='/' component={PostFeed} />
        <Route exact path='/posts/:id' component={PostFeed} />
        <Route path='/register' component={RegisterForm} />
      </Switch>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <SideRoutes />
      <MainRoutes />
    </Router>
  );
};

export default AppRouter;
