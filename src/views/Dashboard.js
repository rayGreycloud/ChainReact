import React, {Component} from 'react';
import '../styles/Dashboard.css';
import PostGroup from '../containers/PostGroup';

// Dashboard is the main view. Associated with the first mock render provided by Adam W.
export default class Dashboard extends Component {
    render() {
        return (
            <PostGroup></PostGroup>
        )
    }
}