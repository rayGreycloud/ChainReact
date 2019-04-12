import React, {Component} from 'react';
import '../styles/Dashboard.css';
import PostGroup from '../containers/PostGroup';

// Dashboard is the main view. Associated with the first mock render provided by Adam W.
export default class Dashboard extends Component {
    render() {
        return (
          <div style={{width:'75vw', marginTop: '6em'}}>
            <PostGroup title="Today" numPosts="4"/>
            <PostGroup title="Yesterday" numPosts="14"/>
          </div>
        )
    }
}