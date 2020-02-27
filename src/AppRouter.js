import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/common/Header'
import PostFeed from './components/PostFeed'
import Post from './components/Post'
import Registration from './pages/RegistrationPage'

import './styles/AppRouter.css'

const SideRoutes = () => {
  return (
    <div className="panel-side">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Post} />
        <Route path="/register" component={Home} />
      </Switch>
    </div>
  )
}

const MainRoutes = () => {
  return (
    <div className="panel-main">
      <Header />
      <Switch>
        <Route exact path="/" component={PostFeed} />
        <Route exact path="/posts/:id" component={PostFeed} />
        <Route path="/register" component={Registration} />
      </Switch>
    </div>
  )
}

const AppRouter = () => {
  return (
    <Router>
      <SideRoutes />
      <MainRoutes />
    </Router>
  )
}

export default AppRouter
